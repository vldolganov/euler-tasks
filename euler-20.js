console.time('TIME')
function factorialDigitSum(n) {
    let factorial = BigInt(1);
    for (let i = 2; i <= n; i++) {
      factorial *= BigInt(i);
    }
  
    let digitSum = 0;
    const factorialString = factorial.toString();
    for (let i = 0; i < factorialString.length; i++) {
      digitSum += parseInt(factorialString.charAt(i));
    }
  
    return digitSum;
  }
  
  console.log(factorialDigitSum(100));
  console.timeEnd('TIME')