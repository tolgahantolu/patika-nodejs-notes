// ! Promise, bir işlemin sonucunu temsil eden, onun için yer tutan bir JS nesnesidir.

//const promise1 = new Promise((resolve, reject) => {
//  resolve("success");
//  reject("error");
//});
//
//// ! resolve sonuca ulaşmak için
//promise1.then((value) => console.log(value));
//
//// ! reject sonuca ulaşmak için
//promise1.catch((value) => console.log(value));

//* real world example
const books = [
  { name: "book 1", author: "1 author" },
  { name: "book 2", author: "2 author" },
  { name: "book 3", author: "3 author" },
];

const listBooks = () => {
  books.map((book, i) => console.log(book.name));
};

const addBook = (newBook) => {
  return (promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    reject("Something went wrong!");
  }));
};

addBook({ name: "book 4", author: "4 author" })
  .then((value) => {
    //  listBooks();
    value.map((book) => console.log(book.name));
  })
  .catch((err) => console.log(err));
