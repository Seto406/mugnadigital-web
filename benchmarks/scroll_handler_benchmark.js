
const iterations = 100000;
console.log(`Simulating ${iterations} scroll events...`);

// Mock DOM elements and state for measurement
const container = {
  scrollWidth: 1000,
  clientWidth: 500,
  scrollLeft: 0,
};

let showHint = false;
const setShowHint = (val) => { showHint = val; };

// Tracking metrics
let expensiveOps = 0;

// The "expensive" logic we want to avoid running repeatedly
const performCheck = () => {
  expensiveOps++;
  // Simulate DOM reads causing reflow
  const sw = container.scrollWidth;
  const cw = container.clientWidth;
  const sl = container.scrollLeft;

  if (sw > cw && sl < 20) {
    setShowHint(true);
  } else {
    setShowHint(false);
  }
};


// --- Scenario 1: Unthrottled ---
expensiveOps = 0;
const start1 = performance.now();

for (let i = 0; i < iterations; i++) {
  // Unthrottled listener runs logic directly on every event
  performCheck();
}

const end1 = performance.now();
const time1 = end1 - start1;
const ops1 = expensiveOps;
console.log(`Unthrottled: Executed expensive logic ${ops1} times in ${time1.toFixed(2)}ms`);


// --- Scenario 2: Throttled (using requestAnimationFrame pattern) ---
expensiveOps = 0;
let ticking = false;
const start2 = performance.now();

// Simulate events firing rapidly (e.g. within a single frame)
for (let i = 0; i < iterations; i++) {
  if (!ticking) {
    // Listener only schedules the work
    ticking = true;

    // In a real browser, requestAnimationFrame(performCheck) would be called here.
    // The actual performCheck() would run asynchronously on the next frame.
    // We simulate the cost of scheduling (minimal) here.
  }
}

// Simulate the frame firing once after the burst of events
if (ticking) {
  performCheck();
  ticking = false;
}

const end2 = performance.now();
const time2 = end2 - start2;
const ops2 = expensiveOps;
console.log(`Throttled:   Executed expensive logic ${ops2} times in ${time2.toFixed(2)}ms`);


// Summary
console.log(`\nImprovement: Reduced expensive operations by ${(ops1 / ops2).toFixed(0)}x`);
