// =============================================
// 2. CONDITIONS — TASK: Grade from score
// =============================================
// Create a variable score (0-100). Print the grade:
//   90-100 -> A, 80-89 -> B, 70-79 -> C, 60-69 -> D, below 60 -> F
// Try changing score a few times to test every branch.

// your code here



const score = 80;

if (score >= 90) {
  console.log("Grade: A");
} 

else if (score >= 80) {
  console.log("Grade: B");
} 

else if (score >= 70) {
  console.log("Grade: C");
} 

else if (score >= 60) {
  console.log("Grade: D");
} 

else {
  console.log("Grade: F");
}