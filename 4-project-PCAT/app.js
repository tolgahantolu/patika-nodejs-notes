const express = require('express');
const { connect } = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const ejs = require('ejs');
const path = require('path');

const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageControllers');

const app = express();

// connect db
connect('mongodb://localhost/pcat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// template engine
app.set('view engine', 'ejs'); //! bizim view klasörümüze bakar

//!! Middlewares !!
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

//! 👇 Form aracılığıyla tarayıcıya gönderilen veriyi okumak için gerekli middleware'ler - (önceden body parser modülü kullanılırdı) 👇
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload());

app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'], //! hangi methodların override edileceği...
  })
);

//! ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
