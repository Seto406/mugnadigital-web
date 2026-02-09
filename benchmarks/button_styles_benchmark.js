
const iterations = 1000000;

console.log(`Running ${iterations} iterations...`);

// Scenario 1: Recreating styles inside loop (Current)
const start1 = performance.now();
for (let i = 0; i < iterations; i++) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-palay focus:ring-offset-2 focus:ring-offset-background cursor-pointer";

  const variantStyles = {
    primary: "bg-brand-palay text-brand-void hover:bg-brand-palay/90 hover:shadow-[0_0_15px_var(--color-brand-palay)] border border-transparent",
    secondary: "bg-transparent border-2 border-brand-palay text-brand-palay hover:bg-brand-palay/10",
    ghost: "bg-transparent text-foreground hover:text-brand-palay border border-transparent"
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // Simulate usage
  const classes = `${baseStyles} ${variantStyles['primary']} ${sizeStyles['md']}`;
  if (!classes) throw new Error('Error');
}
const end1 = performance.now();
const time1 = end1 - start1;
console.log(`Recreating styles (Current): ${time1.toFixed(2)}ms`);

// Scenario 2: Static styles (Optimized)
const baseStylesStatic = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-palay focus:ring-offset-2 focus:ring-offset-background cursor-pointer";

const variantStylesStatic = {
  primary: "bg-brand-palay text-brand-void hover:bg-brand-palay/90 hover:shadow-[0_0_15px_var(--color-brand-palay)] border border-transparent",
  secondary: "bg-transparent border-2 border-brand-palay text-brand-palay hover:bg-brand-palay/10",
  ghost: "bg-transparent text-foreground hover:text-brand-palay border border-transparent"
};

const sizeStylesStatic = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
};

const start2 = performance.now();
for (let i = 0; i < iterations; i++) {
  // Simulate usage
  const classes = `${baseStylesStatic} ${variantStylesStatic['primary']} ${sizeStylesStatic['md']}`;
  if (!classes) throw new Error('Error');
}
const end2 = performance.now();
const time2 = end2 - start2;
console.log(`Static styles (Optimized): ${time2.toFixed(2)}ms`);

console.log(`Improvement: ${(time1 / time2).toFixed(2)}x faster`);
