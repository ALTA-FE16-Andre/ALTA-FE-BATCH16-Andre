function simpleEquations(a: number, b: number, c: number): string {
  // your code here
  for (let x = 1; x < a; x++) {
    for (let y = x + 1; y < a - x; y++) {
      let z = a - x - y;
      if (x * y * z == b && x * x + y * y + z * z == c) {
        return `${x} ${y} ${z}`;
      }
    }
  }
  return "no solution";
}


console.log(simpleEquations(1, 2, 3)); // no solution
console.log(simpleEquations(6, 6, 14)); // 1 2 3

export default simpleEquations;
