const express = require('express');
const path = require('path');

const app = express();

//!! MY Middlewares !!
//const myLogger = (req, res, next) => {
//  console.log(`middleware log 1 `);
//  next(); //! diğer middleware'e geçer, response tamamlanır.
//};
//const myLogger2 = (req, res, next) => {
//  console.log(`middleware log 2 `);
//  next(); //! diğer middleware'e geçer, response tamamlanır.
//};
//app.use(myLogger);
//app.use(myLogger2);

app.use(express.static('public')); //! req-res loop içindeki her şeye middleware denir, express.startic de bir middleware.

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
