//! Node.js uygulaması farklı görevleri olan farklı Javascript dosyalarından oluşur ve Node.js içerdiği tüm Javascript dosyalarına bir modül olarak davranır. Modül genelde belirli özel bir işlevi olan Javascript dosyasıdır. Bu şekilde Node.js uygulamaya ait olan dosyaları farklı bölümlere ayırarak kodun daha modülarize olmasını ve aynı zamanda bu kod kontrolünün ve hata yakalamanın daha kolay olmasını sağlar.

function showPrimeNumbers(lowNumber, highNumber) {
  for (let i = lowNumber; i <= highNumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}

module.exports = showPrimeNumbers; // Fonksiyonu MODULE olarak diğer dosyaların kullanımına açıyoruz.

//! ES6 SYNTAX
//export default showPrimeNumbers;
