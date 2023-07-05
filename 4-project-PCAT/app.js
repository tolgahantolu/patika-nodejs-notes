const express = require('express');
const { connect } = require('mongoose');
const fileUpload = require('express-fileupload');

const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const Photo = require('./models/Photo');

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

//! ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({}).sort('-dateCreated');

  res.render('index', { photos });
  //  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

app.get('/about', (req, res) => {
  //  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});
app.get('/add', (req, res) => {
  //  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add');
});
app.get('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
});

app.post('/photos', async (req, res) => {
  // console.log(req.files.image); //! bu "image" ifadesi input'un name değeri...
  //  await Photo.create(req.body);
  //  res.redirect('/');

  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + '/public/uploads/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async (err) => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/');
  });
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
