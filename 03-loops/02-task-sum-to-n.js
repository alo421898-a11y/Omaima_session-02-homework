// =============================================
// 3. LOOPS — TASK: Sum 1 to N
// =============================================
// Create a variable n. Calculate the sum of all numbers from 1 to n.
// Check: n = 100 -> 5050

// your code here

const n = 100;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(`The sum from 1 to ${n} is: ${sum}`);