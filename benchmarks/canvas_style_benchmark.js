/* eslint-disable */

const { performance } = require('perf_hooks');

const iterations = 1000000;
const brandColorRgb = '16, 185, 129';
const opacity = 0.5;

// Mock context
const ctx = {
  fillStyle: '',
  globalAlpha: 1.0,
  fill: () => {},
  beginPath: () => {},
  arc: () => {},
};

console.log(`Running benchmark with ${iterations} iterations...`);

// Scenario 1: Current implementation (String Construction)
const start1 = performance.now();
for (let i = 0; i < iterations; i++) {
  ctx.fillStyle = `rgba(${brandColorRgb}, ${opacity})`;
  ctx.beginPath();
  ctx.arc(10, 10, 5, 0, Math.PI * 2);
  ctx.fill();
}
const end1 = performance.now();
const time1 = end1 - start1;
console.log(`Scenario 1 (String Construction): ${time1.toFixed(2)} ms`);

// Scenario 2: Optimized implementation (Global Alpha)
const start2 = performance.now();
// Set fillStyle once
ctx.fillStyle = `rgb(${brandColorRgb})`;
for (let i = 0; i < iterations; i++) {
  ctx.globalAlpha = opacity;
  ctx.beginPath();
  ctx.arc(10, 10, 5, 0, Math.PI * 2);
  ctx.fill();
}
// Restore alpha
ctx.globalAlpha = 1.0;
const end2 = performance.now();
const time2 = end2 - start2;
console.log(`Scenario 2 (Global Alpha): ${time2.toFixed(2)} ms`);

const improvement = ((time1 - time2) / time1) * 100;
console.log(`Improvement: ${improvement.toFixed(2)}%`);
