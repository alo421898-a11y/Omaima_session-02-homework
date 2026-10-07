// =============================================
// 5. OBJECTS — TASK: Book
// =============================================
// Create an object book with keys: title, author, year, pages.
// 1. Print: "Celestial Bodies by Jokha Alharthi (2010), 243 pages"
// 2. Add a new key isRead = true
// 3. Change pages to a different number and print the object again

// your code here

const book = {
  title: "Celestial Bodies",
  author: "Jokha Alharthi",
  year: 2010,
  pages: 243
};

console.log(`${book.title} by ${book.author} (${book.year}), ${book.pages} pages`);


book.isRead = true;


book.pages = 300;
console.log(book);

