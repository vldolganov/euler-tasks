console.time("TIME")




function task7(num) {
  let count = 1;
  let number = 0;
  let prime = 2;

  while (count < num) {
    for (let j = 2; prime % j != 0; j++) {
      if (prime === j) {
        count++;
        number++;
        if (number === num) {
          console.log(prime)
        }
      }
    }
    prime++;
  }
}

console.log(task7(10001))
console.log(task7(number))