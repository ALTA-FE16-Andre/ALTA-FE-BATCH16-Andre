function jajanBoba(uang: number, callback: (uang: number) => void): void {
  // your code here
    const bobaPrice = 5000;
  
    if (uang < bobaPrice) {
      console.log("Maaf, uang kamu belum cukup untuk membeli boba");
      console.log("Sisa uang kamu sebesar Rp." + uang );
    } else {
      console.log("Kamu jajan boba dengan harga Rp." + bobaPrice);
      uang -= bobaPrice;
  
      setTimeout(() => {
        callback(uang);
      }, 5000);
    }
  } 
  
  function jajanSeblak(uang: number): void {
    const seblakPrice = 8000;
  
    if (uang < seblakPrice) {
      console.log("Maaf, uang kamu belum cukup untuk membeli seblak");
      console.log("Sisa uang kamu sebesar Rp." + uang);
    } else {
      console.log("Kamu jajan seblak dengan harga Rp." + seblakPrice);
      uang -= seblakPrice;
      console.log("Sisa uang kamu sebesar Rp." + uang);
    }
  }
  
jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
