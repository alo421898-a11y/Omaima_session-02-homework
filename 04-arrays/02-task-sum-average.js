// =============================================
// 4. ARRAYS — TASK: Sum and average
// =============================================
// Calculate the sum and the average of the numbers.
// Check: sum = 42, average = 7

const numbers = [4, 8, 15, 2, 6, 7];

// your code here

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;

console.log(`Sum = ${sum}, Average = ${average}`);