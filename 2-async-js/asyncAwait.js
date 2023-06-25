//! ASYNC/AWAIT yapısı Promise'lerin farklı bir yazım şeklidir diyebiliriz.

const getData = (data) => {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınmaya başlıyor...");

    if (data) {
      resolve("Veriler alındı");
    } else {
      reject("Veriler alınamadı");
    }
  });
};

const cleanData = (receivedData) => {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor");

    if (receivedData) {
      resolve("Veriler düzenlendi");
    } else {
      reject("Veriler düzenlenemedi");
    }
  });
};

// ?PROMISE YAPISI 👇
//getData(true)
//  .then((result) => {
//    console.log(result);
//    return cleanData(true);
//  })
//  .then((result) => console.log(result))
//  .catch((err) => console.log(err));

// ?ASYNC-AWAIT YAPISI 👇
// NOT: Bu yapıda Promise'de olduğu gibi hataları yakalamak için try-catch bloğunu kullanırız.
const processData = async () => {
  try {
    const receivedData = await getData(true); // bu işlem bitene kadar aşağıya geçmez
    console.log(receivedData);

    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
};
processData();
