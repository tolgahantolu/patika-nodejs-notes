//const func1 = () => {
//  console.log("function 1 çalıştı");
//};
//
//const func2 = () => {
//  console.log("function 2 çalıştı");
//};
//
//// ! KOD SIRASINA GÖRE ÇALIŞIR, SATIR SIRASINA GÖRE DEĞİL!
//func2();
//func1();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//const func1 = () => {
//  console.log("function 1 çalıştı");
//  func3();
//};
//
//const func2 = () => {
//  console.log("function 2 çalıştı");
//};
//
//const func3 = () => {
//  console.log("function 3 çalıştı");
//  func2();
//};
//
//func1();

// ? !!NOT: Javascript'in kendisi her zaman senkron ve single-thread olarak çalışır (single-thread: kısaca aynı anda tek bir işlem yapabilme). Biz callback'ler kullanarak, ASYNC-AWAIT ile JS kodlarını manipüle ederek asenkron bir yapı elde etmeye çalışırız.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//let x = 5;
//console.log("ilki", x);
//
//setTimeout(() => {
//  x = x + 5;
//  console.log("ikincisi", x); // ! Bu şekilde bir fonksiyonun içerisine argüman olarak eklenen diğer fonksiyonlar callback fonksiyonudur.
//}, 5000);
//
//x = x + 5;
//console.log("üçüncüsü", x);

//* real world example
const books = [
  { name: "book 1", author: "1 author" },
  { name: "book 2", author: "2 author" },
  { name: "book 3", author: "3 author" },
];

const listBooks = () => {
  books.map((book, i) => console.log(book.name));
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback(); // Aynı anda listeleme işlemi yapılmasınıda istiyorum. Callback!
};

// listBooks();
addBook({ name: "book 4", author: "4 author" }, listBooks);
