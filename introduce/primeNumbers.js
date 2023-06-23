// 1'e ve kendisine bölünen ve 1'den büyük pozitif olan tam sayılara asal (prime) sayılar denir.

const showPrimeNumbers = (lowNumber, highNumber) => {
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
};

showPrimeNumbers(8, 17);
showPrimeNumbers(7, 22);

//console.log(process);
//console.log(process.argv);
console.log(process.argv.slice(1));
