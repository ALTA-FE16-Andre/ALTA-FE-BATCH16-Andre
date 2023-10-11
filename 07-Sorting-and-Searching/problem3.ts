function mostAppearItem(items: string[]): any {
  // your code here
    const jumlahItem: { [item: string]: number } = {};
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        jumlahItem[item] = (jumlahItem[item] || 0) + 1;
    }
    const sortedResult = Object.fromEntries(
      Object.entries(jumlahItem).sort(([, a], [, b]) => a - b))
    return sortedResult;
}

console.log(mostAppearItem(["js", "js", "golang", "ruby", "ruby", "js", "js"])); // { golang: 1, ruby: 2, js: 4 }
console.log(mostAppearItem(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"])); // { C: 1, D: 2, B: 3, A: 4 }
console.log(mostAppearItem(["football", "basketball", "tenis"])); // { football: 1, basketball: 1, tenis: 1 }

export default mostAppearItem;
