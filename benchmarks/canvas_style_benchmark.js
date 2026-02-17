
const ITERATIONS = 1000000;
const brandColorRgb = '16, 185, 129';
const opacity = 0.5;

// Simulate Canvas context
const ctx = {
  fillStyle: '',
  globalAlpha: 1.0,
  beginPath: () => {},
  arc: () => {},
  fill: () => {}
};

console.log(`Running benchmark with ${ITERATIONS} iterations...`);

// Baseline: String Interpolation inside loop
console.time('Baseline (String Interpolation)');
for (let i = 0; i < ITERATIONS; i++) {
  ctx.fillStyle = `rgba(${brandColorRgb}, ${opacity})`;
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2);
  ctx.fill();
}
console.timeEnd('Baseline (String Interpolation)');

// Optimized: Property Assignment inside loop
console.time('Optimized (Global Alpha)');
ctx.fillStyle = `rgb(${brandColorRgb})`; // Set once outside loop
for (let i = 0; i < ITERATIONS; i++) {
  ctx.globalAlpha = opacity;
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2);
  ctx.fill();
}
console.timeEnd('Optimized (Global Alpha)');
