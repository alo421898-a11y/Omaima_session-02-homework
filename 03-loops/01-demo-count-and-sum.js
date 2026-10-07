// =============================================
// 3. LOOPS — DEMO: Print 1 to 10, then sum
// =============================================
// for (start; condition; step) { ... }
// while (condition) { ... }   <- make sure the condition becomes false, or it runs forever!
// Accumulator pattern: let sum = 0; then sum = sum + something inside the loop

console.log("--- Print 1 to 10 ---");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("--- Sum 1 to 10 ---");

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(`Sum of 1..10 = ${sum}`); // 55
