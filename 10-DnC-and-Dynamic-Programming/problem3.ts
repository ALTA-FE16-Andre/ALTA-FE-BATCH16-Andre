function frog(jumps: number[]): number {
  // your code here
  let toJump: number[] = [0, Math.abs(jumps[0] - jumps[1])];

  for (let i = 2; i < jumps.length; i++) {
    toJump[i] = Math.min(
      toJump[i - 1] + Math.abs(jumps[i - 1] - jumps[i]),
      toJump[i - 2] + Math.abs(jumps[i - 2] - jumps[i])
    );
  }

  return toJump[jumps.length - 1];
}

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40

export default frog;
