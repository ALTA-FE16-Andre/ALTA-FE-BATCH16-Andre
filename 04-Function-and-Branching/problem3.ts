function meanMedian(numbers: number[]): string {
  // your code here
  let sumMean = 0, x = numbers.length, median = 0;

  //mean
  for (let i = 0; i < x; i++) {
    sumMean += numbers[i];
  }
  const mean = sumMean / x;

  //median
  if (x % 2 === 0) {
    median = (numbers[x / 2 - 1] + numbers[x / 2]) / 2;
  } else {
    median = numbers[(x - 1) / 2];
  }
  return mean + " | " + median;
}

console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30

export default meanMedian;
