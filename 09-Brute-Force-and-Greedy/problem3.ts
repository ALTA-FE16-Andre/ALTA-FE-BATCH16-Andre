function isPangram(texts: string): boolean {
  // your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const textLowerCase = texts.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (textLowerCase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Public junk dwarves hug my beloved pillow")); // false
console.log(
  isPangram("Jim quickly realized that the beautiful gowns are expensive")
); //true
console.log(isPangram("Back in June we delivered oxygen equipment")); // false

export default isPangram;