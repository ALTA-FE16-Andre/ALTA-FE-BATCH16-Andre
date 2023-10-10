function primaSegiEmpat(wide: number, high: number, start: number): void {
    let result = ''
    let primaNumber = start
    let jumlah = 0

    const prima = (i : number) => {
      if (i <= 1) return false
      if (i <= 3) return true
      if (i % 2 === 0 || i % 3 === 0) return false
      let j = 5
      while (j * j <= i) {
        if(i % j === 0 || i % (j + 2) === 0) return false
        j += 6
      }
      return true
    }

    for (let j = 0; j < high; j++) {
      let row = ''
      for (let k = 0; k < wide; k++) {
        do {
          primaNumber++
        } while (!prima(primaNumber))
        row += primaNumber + ' '
        jumlah += primaNumber
      }
      result += row.trim() + '\n'
    }
    console.log(result += jumlah)
}

primaSegiEmpat(2, 3, 13);
/*
17 19
23 29
31 37
156
*/
primaSegiEmpat(5, 2, 1);
/*
2  3  5  7 11
13 17 19 23 29
129
*/

export default primaSegiEmpat;
