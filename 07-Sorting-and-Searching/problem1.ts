function maximumBuyProduct(money: number, productPrice: number[]): number {
  // your code here
    productPrice.sort((a, b) => a - b);
    let jumlahProduct: number = 0;
    let hargaTotal: number = 0;

    for (let i = 0; i < productPrice.length; i++) {
        const price = productPrice[i];
        if (hargaTotal + price <= money) {
            hargaTotal += price;
            jumlahProduct++;
        } else {
            break;
        }
    }

    return jumlahProduct;
}

console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000])); // 3
console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])); // 4
console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000])); // 4
console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000])); // 1
console.log(maximumBuyProduct(0, [10000, 30000])); // 0

export default maximumBuyProduct;
