// =============================================
// 4. ARRAYS — TASK: Hottest day
// =============================================
// Temperatures in Muscat for 6 days.
// Find the largest number WITHOUT Math.max.
// Hint: start with let max = temperatures[0]; then compare with each item.
// Check: 45

const temperatures = [32, 38, 45, 29, 41, 35];

// your code here

let max = temperatures[0];

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > max) {
    max = temperatures[i];
  }
}

console.log(`The hottest temperature is: ${max}`);
