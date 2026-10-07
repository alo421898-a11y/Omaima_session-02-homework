// =============================================
// 3. LOOPS — STRETCH: FizzBuzz
// =============================================
// Print numbers from 1 to 30, but:
//   divisible by 3 and 5 -> "FizzBuzz"
//   divisible by 3       -> "Fizz"
//   divisible by 5       -> "Buzz"
//   otherwise            -> the number
// Hint: check the "3 and 5" case FIRST. Why?

// your code here

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } 
  else if (i % 3 === 0) {
    console.log("Fizz");
  } 
  else if (i % 5 === 0) {
    console.log("Buzz");
  } 
  else {
    console.log(i);
  }
}