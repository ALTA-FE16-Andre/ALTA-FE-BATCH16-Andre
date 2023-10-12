function lottery(num: number): Promise<string> {
  // your code here
  return new Promise((resolve, reject) => {
    console.log("Undian lotre dimulai...");
    console.log("Sedang mengundi nomor Anda...");

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      console.log(randomNumber)

      if (num === randomNumber) {
        resolve("Selamat, Anda mendapatkan hadiah utama berupa mobil!");
      } else {
        reject("Maaf, Anda kurang beruntung.");
      }
    }, 10000);
  });
} 

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir…"));
