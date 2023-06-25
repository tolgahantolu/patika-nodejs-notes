//! Her zaman döküman okumak, onun üzerinde ilerlemek iyidir. Node.js dökümanını oku.
const fs = require("fs");

// DOSYA OKUMAK
fs.readFile("./password.txt", "utf8", (err, data) => {
  err ? console.log(err) : console.log(data);
});

// DOSYA YAZMAK
fs.writeFile("./example.txt", "TOLGAHAN TOLU", "utf8", (err, data) => {
  err ? console.log(err) : console.log("başardim, dosyayi yazdim");
});

fs.writeFile(
  "./data.json",
  "[{name: 'Tolgahan', title: 'Frontend developer'}, {name: 'Hande', title: 'DevOps engineer'}]",
  "utf8",
  (err, data) => {
    err ? console.log(err) : console.log("JSON dosyasi yazdim!");
  }
);

// DOSYAYA VERİ EKLEMEK
fs.appendFile(
  "./example.txt",
  "\nLOREM IPSUM DOLOR SIT AMET",
  "utf8",
  (err, data) => {
    err ? console.log(err) : console.log("YENİ VERİYİ EKLEDİM!");
  }
);

// DOSYA SİLME İŞLEMİ
fs.unlink("./data.json", (err) => {
  err ? console.log(err) : console.log("dosyayi sildimmm");
});

// KLASÖRLER OLUŞTURMAK
fs.mkdir("./uploads/images", { recursive: true }, (err) => {
  // Eğer recursive parametresi olmazsa ilk klasörü zaten varmış gibi kabul eder.
  err ? console.log(err) : console.log("klasörleri oluşturdum");
});

// KLASÖRLER SİLMEK
fs.rm("./uploads/", { recursive: true }, (err) => {
  // Eğer recursive parametresi olmazsa ilk klasörü zaten varmış gibi kabul eder.
  err ? console.log(err) : console.log("sildim klasörleri");
});

// DIRECTORY (KLASÖR) ADI ÖĞRENME
console.log(__dirname);
