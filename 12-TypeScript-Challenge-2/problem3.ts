function makeDiamond(char: string): void {
  // your code here
  const n: number = char.charCodeAt(0) - "A".charCodeAt(0);

  for (let i = -n; i <= n; i++) {
    let baris = "";
    for (let j = -n; j <= n; j++) {
      let jarak = Math.abs(i) + Math.abs(j);
      baris += jarak === n ? String.fromCharCode("A".charCodeAt(0) + n - Math.abs(i)) : ".";
    }
    console.log(baris);
  }
}

makeDiamond("C");
makeDiamond("E");

export default makeDiamond;
