function dragonOfLoowater(
  dragonHead: number[],
  knightHeight: number[]
): number | string {
  // your code here
  dragonHead.sort((a, b) => a - b);
  knightHeight.sort((a, b) => a - b);

  let totalHeight = 0;
  let knightIndex = 0;

  for (let i = 0; i < dragonHead.length; i++) {
    const diameter = dragonHead[i];

    while (knightIndex < knightHeight.length && diameter > knightHeight[knightIndex]) {
      knightIndex++;
    }

    if (knightIndex >= knightHeight.length) {
      return "knight fall";
    }

    totalHeight += knightHeight[knightIndex];
    knightIndex++;
  }

  return totalHeight.toString();
}

console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // knight fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10

export default dragonOfLoowater;