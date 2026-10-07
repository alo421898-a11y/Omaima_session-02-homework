// =============================================
// 5. OBJECTS — DEMO: Student object
// =============================================
// const user = { name: "Ahmed", age: 20 };
// user.name          -> dot access
// user["name"]       -> bracket access
// user.age = 21      -> update a value
// user.city = "Sohar" -> add a new key
// Arrays of objects: [{ ... }, { ... }]  -> very common with real data

const student = {
  name: "Ahmed",
  age: 20,
  isActive: true,
};

console.log(student);
console.log(student.name);
console.log(student["age"]);

student.age = 21;          // update
student.city = "Sohar";    // add
console.log(student);

console.log(`${student.name} is ${student.age} and lives in ${student.city}.`);
