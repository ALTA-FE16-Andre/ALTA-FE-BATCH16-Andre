 function playingDomino(cards: number[][], deck: number[]): number[] {
    let selectedDomino: number[] | [] = [];
    let jumlahMax = 0;
  
    cards.forEach((card) => {
      const [num1, num2] = card;
      if (num1 === deck[0] || num1 === deck[1] || num2 === deck[0] || num2 === deck[1]) {
        const sum = num1 + num2;
         if (sum > jumlahMax) {
          selectedDomino = card;
          jumlahMax = sum;
        }
      }
    });
    return selectedDomino;
  }
  
console.log(
  playingDomino(
    [
      [6, 5],
      [3, 4],
      [2, 1],
      [3, 3],
    ],
    [4, 3]
  )
); // [3, 4]
console.log(
  playingDomino(
    [
      [6, 5],
      [3, 3],
      [3, 4],
      [2, 1],
    ],
    [3, 6]
  )
); // [6 5]
console.log(
  playingDomino(
    [
      [6, 6],
      [2, 4],
      [3, 6],
    ],
    [5, 1]
  )
); // []

export default playingDomino;
