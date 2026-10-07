// =============================================
// 2. CONDITIONS — DEMO: Even or odd
// =============================================
// Comparison: ===  !==  >  <  >=  <=
// Always use === (strict), not == (loose): 5 == "5" is true, 5 === "5" is false
// Logic: && (AND), || (OR), ! (NOT)
// if (condition) { ... } else if (other) { ... } else { ... }

const number = 7;

if (number % 2 === 0) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

console.log(5 == "5");  // true  (loose, converts types)
console.log(5 === "5"); // false (strict, compares types too)
