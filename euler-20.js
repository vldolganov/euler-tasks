console.time('TIME')
function factorialDigitSum(n) {
    let factorial = BigInt(1);
    for (let i = 2; i <= n; i++) {
      factorial *= BigInt(i);
    }
  
    let digitSum = 0;
    while (factorial > 0) {
      digitSum += factorial % 10n;
      factorial /= 10n;
    }
  
    return digitSum;
  }
  
  console.log(factorialDigitSum(100));
  console.timeEnd('TIME')