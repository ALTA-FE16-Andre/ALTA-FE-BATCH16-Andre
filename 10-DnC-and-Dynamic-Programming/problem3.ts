function frog(jumps: number[]): number {
  // your code here
  let result: number[] = [0, Math.abs(jumps[0] - jumps[1])];

  for (let i = 2; i < jumps.length; i++) {
    result[i] = Math.min(
      result[i - 1] + Math.abs(jumps[i - 1] - jumps[i]),
      result[i - 2] + Math.abs(jumps[i - 2] - jumps[i])
    );
  }

  return result[jumps.length - 1];
}

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40

export default frog;
