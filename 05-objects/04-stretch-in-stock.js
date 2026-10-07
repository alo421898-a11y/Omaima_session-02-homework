// =============================================
// 5. OBJECTS — STRETCH: Only in stock
// =============================================
// Print only the products where inStock is true,
// and the total price of those products only.
// Check: Laptop, Keyboard, total = 475 OMR

const products = [
  { name: "Laptop", price: 450, inStock: true },
  { name: "Mouse", price: 10, inStock: false },
  { name: "Keyboard", price: 25, inStock: true },
  { name: "Monitor", price: 120, inStock: false },
];

// your code here

let total = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i].inStock) {
    console.log(`${products[i].name} — ${products[i].price} OMR`);
    total += products[i].price;
  }
}

console.log(`Total = ${total} OMR`);
