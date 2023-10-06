function primaSegiEmpat(wide: number, high: number, start: number): void {
  // your code here
  let count: number = 0;
  let currentNumber: number = start + 1;
  let jumlah: number = 0;
  const grid: number[][] = [];

  while (count < wide * high) {
    let isPrime = true;

    //loop mulai dari bilangan prima terkecil
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      if (count % wide === 0) {
        grid.push([currentNumber]);
      } else {
        grid[grid.length - 1].push(currentNumber);
      }
      count++;
      jumlah += currentNumber;
    }

    currentNumber++;
  }
  
  for(let i = 0; i < grid.length; i++) {
    console.log(grid[i]);
  }
  console.log(jumlah)
}

console.log(primaSegiEmpat(2, 3, 13));
/*
17 19
23 29
31 37
156
*/
console.log(primaSegiEmpat(5, 2, 1));
/*
2  3  5  7 11
13 17 19 23 29
129
*/

export default primaSegiEmpat;
