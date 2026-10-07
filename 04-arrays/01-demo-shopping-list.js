// =============================================
// 4. ARRAYS — DEMO: Shopping list
// =============================================
// const list = ["a", "b", "c"];
// list[0]       -> first item (index starts at 0!)
// list.length   -> how many items
// list.push(x)  -> add to the end
// list.pop()    -> remove from the end
// for (const item of list) { ... }  -> loop over every item

const shoppingList = ["dates", "laban", "bread"];

console.log(shoppingList[0]);      // dates
console.log(shoppingList.length);  // 3

shoppingList.push("halwa");
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

// Classic for loop (when you need the index)
for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
}

// for...of (when you only need the item)
for (const item of shoppingList) {
  console.log(`- ${item}`);
}
