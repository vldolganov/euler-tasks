console.time("TIME")

let count = 6;

function task7(num) {
  while (count != 10001) {
    if ((num % num === 0) && !(num % 1)) {
      count++;
      num++;
    } else {
      num++

    }
  }
  return num
}

console.log(task7(14))


console.timeEnd("TIME")