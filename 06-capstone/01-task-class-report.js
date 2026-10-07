// =============================================
// 6. CAPSTONE — TASK: Class report (uses everything)
// =============================================
// For every student:
//   1. Print their name, score and grade (A/B/C/D/F, same rules as the grade task)
//      e.g. "Ahmed: 87 -> B"
//   2. Print "PASSED" if score >= 60, otherwise "FAILED"
// After the loop:
//   3. Print the class average score
//   4. Print the name of the student with the highest score
// Check: average = 74, best = Fatma

const students = [
  { name: "Ahmed", score: 87 },
  { name: "Fatma", score: 95 },
  { name: "Khalid", score: 58 },
  { name: "Maryam", score: 72 },
  { name: "Said", score: 64 },
  { name: "Aisha", score: 68 },
];

// your code here

let totalScore = 0;
let highestScore = students[0].score;
let bestStudent = students[0].name;

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  let grade = "";


  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 80) {
    grade = "B";
  } else if (student.score >= 70) {
    grade = "C";
  } else if (student.score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  
  console.log(`${student.name}: ${student.score} -> ${grade}`);

   
  if (student.score >= 60) {
    console.log("PASSED");
  } else {
    console.log("FAILED");
  }

   
  totalScore += student.score;

  
  if (student.score > highestScore) {
    highestScore = student.score;
    bestStudent = student.name;
  }
}

 
const classAverage = totalScore / students.length;
console.log(`Class Average: ${classAverage}`); 


console.log(`Best Student: ${bestStudent}`);
