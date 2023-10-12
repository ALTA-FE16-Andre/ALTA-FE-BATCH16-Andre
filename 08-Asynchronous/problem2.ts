const clothes = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

interface ObjItem {
  item: string;
  price: number;
  time: number;
}

function buyApparel(money: number, objItem: ObjItem, callback: () => void) {
  // your code here
  console.log(`saya membawa uang sebesar Rp. ${money}`);
  console.log(`saya ingin membeli ${objItem.item}`);
  console.log(`dengan harga Rp. ${objItem.price}`);
  console.log(`dan waktu yang dibutuhkan adalah ${objItem.time / 1000} detik \n`);

  setTimeout(() => {
    money -= objItem.price;
    if (callback) {
      callback();
    }
  }, objItem.time);
}

buyApparel(150000, clothes, () => {
  buyApparel(150000 - clothes.price, pants, () => {
    buyApparel(150000 - clothes.price - pants.price, hat, () => {
      buyApparel(150000 - clothes.price - pants.price - hat.price, shoes, () => {
        console.log(`sisa kembaliannya adalah Rp. ${150000 - clothes.price - pants.price - hat.price - shoes.price}`);
      });
    });
  });
});
