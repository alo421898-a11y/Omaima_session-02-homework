// =============================================
// 1. VARIABLES — DEMO: Greeting
// =============================================
// let   -> value CAN change later
// const -> value can NOT be reassigned
// Types: string ("text"), number (42, 3.14), boolean (true / false)
// typeof value -> tells you the type
// Template literal: `Hello, ${name}` (backticks!)

const name = "Salim";
let age = 20;
const isStudent = true;

console.log(name);
console.log(typeof name, typeof age, typeof isStudent);
console.log(`Hi, I'm ${name}, I'm ${age} years old.`);

age = age + 1; // let can change
console.log(`Next year I'll be ${age}.`);

// Error demo: uncomment the line below, refresh, and read the red message in the console.
// name = "Khalid"; // TypeError: Assignment to constant variable.
