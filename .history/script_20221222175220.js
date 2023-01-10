let actualPrime = 1;
let actualMax = 1;

consol
function nextPrime() {
  let stop = true;
  let divisorCount = 0;
  actualMax++;
  while (stop) {
    for (index = 1; index <= actualMax; index++) {
      if (actualMax % index == 0) {
        divisorCount++;
      }
    }
    if (divisorCount == 2) {
      actualPrime = actualMax;
      stop = false;
      return actualPrime;
    } else {
      actualMax++;
    }
    divisorCount = 0;
  }
}
function resetPrime() {
  actualMax = 1;
}

function nPrime(n) {
  for (indexa = 1; indexa <= n; indexa++) {
    nextPrime();
  }
}

nPrime(10001);
console.log(actualPrime);