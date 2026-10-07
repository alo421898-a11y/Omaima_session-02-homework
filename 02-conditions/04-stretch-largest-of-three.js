// =============================================
// 2. CONDITIONS — STRETCH: Largest of three
// =============================================
// Create a, b, c. Print the largest one using if / else if / else.

// your code here


const a = 10;
const b = 44;
const c = 37;

if (a >= b && a >= c) {
  console.log(`The largest number is: ${a}`);
} else if (b >= a && b >= c) {
  console.log(`The largest number is: ${b}`);
} else {
  console.log(`The largest number is: ${c}`);
}
