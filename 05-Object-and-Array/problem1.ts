function compareString(a: string, b: string): string {
  // your code here
  let result = "";

  for (let i = 0; i < a.length; i++) {
    const word = a[i];
    if (a[i] === b[i]) {
      result += word;
    }
  }

  return result;
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA

export default compareString;
