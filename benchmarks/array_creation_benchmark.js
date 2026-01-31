
const iterations = 1000000;

console.log(`Running ${iterations} iterations...`);

// Scenario 1: Recreating array inside loop (Current)
const start1 = performance.now();
for (let i = 0; i < iterations; i++) {
  const arr = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];
  // Access to prevent optimization
  if (arr[0].name !== 'Home') throw new Error('Error');
}
const end1 = performance.now();
const time1 = end1 - start1;
console.log(`Recreating array (Current): ${time1.toFixed(2)}ms`);

// Scenario 2: Static array (Optimized)
const staticArr = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const start2 = performance.now();
for (let i = 0; i < iterations; i++) {
  const arr = staticArr;
  // Access to prevent optimization
  if (arr[0].name !== 'Home') throw new Error('Error');
}
const end2 = performance.now();
const time2 = end2 - start2;
console.log(`Static array (Optimized): ${time2.toFixed(2)}ms`);

console.log(`Improvement: ${(time1 / time2).toFixed(2)}x faster`);
