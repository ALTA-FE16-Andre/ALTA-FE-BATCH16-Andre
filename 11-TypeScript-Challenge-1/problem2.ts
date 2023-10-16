function ubahHuruf(sentence: string): string {
  // your code here
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fromkAlphabet = 'KLMNOPQRSTUVWXYZABCDEFGHIJ';
  
    let result = '';
  
    for (let i = 0; i < sentence.length; i++) {
      const text = sentence[i].toUpperCase();
      const index = alphabet.indexOf(text);
  
      if (index !== -1) {
        const encryptedText = fromkAlphabet[index];
        result += encryptedText;
      } else {
        result += text;
      }
    }
  
    return result;
  }

console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB

export default ubahHuruf;
