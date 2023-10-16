function caesarCipher(offset: number, input: string): string {
  // your code here
  let result = '';
  
  for (let text of input) {
    if (text === ' ') {
      result += text;
      continue;
    }
    
    let ascii = text.charCodeAt(0);
    let chiperAscii = ((ascii - 'a'.charCodeAt(0) + offset) % 26) + 'a'.charCodeAt(0);
    let chiperText = String.fromCharCode(chiperAscii);
    
    result += chiperText;
  }
  
  return result;
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl

export default caesarCipher;