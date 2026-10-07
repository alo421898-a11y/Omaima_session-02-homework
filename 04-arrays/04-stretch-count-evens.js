// =============================================
// 4. ARRAYS — STRETCH: Count even numbers
// =============================================
// Count how many numbers in the array are even.
// Check: 5

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your code here
let count = 0;

for (let i = 0; i < values.length; i++) {
  if (values[i] % 2 === 0) {
    count++;
  }
}

console.log(`Number of even values: ${count}`);
