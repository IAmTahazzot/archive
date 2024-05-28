// For Of loop
const library = ['Harry Potter', 'Life is beautiful', 'Rich dad poor dad'];

for (const book of library) {
  console.log(book);
}

// OR
for (const book of library.entries()) {
  console.log(`${book[0]}: ${book[1]}`);
}
