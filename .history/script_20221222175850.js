console.time("TIME")

let primeNumbers = [2, 3];

for (let count = primeNumbers.length; count < 10001; count++) {
  let number = primeNumbers[primeNumbers.length - 1] + 2;
 
  while (isDivisible(number, primeNumbers)) number += 2;
  primeNumbers.push(number);
}

function isDivisible(number, divisors) {
  for (let index = 0; index < divisors.length; index++) {
    if (number % divisors[index] === 0) return true;
  }
  return false;
}

let solution = primeNumbers.pop();

console.log(solution);

console.timeEnd("TIME")