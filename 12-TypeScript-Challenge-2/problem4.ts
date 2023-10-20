function findMaxSumSubArray(k: number, arr: number[]): number {
  // your code here
  let jumlahMax = 0, windowSum = 0;

  for(let i = 0; i < arr.length; i++) {
      windowSum += arr[i];

      if(i >= k - 1) {
          jumlahMax = Math.max(jumlahMax, windowSum);
          windowSum -= arr[i - (k - 1)];
      }
  }

  return jumlahMax;
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8

export default findMaxSumSubArray;
