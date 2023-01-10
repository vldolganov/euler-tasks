console.time("TIME")

let num = 14;
let count = 6;

function task7(num){
  while(count != 10001){
    if (!(num % num) && !(num % 1)){
      count++;
    }  
    num ++;
  }
  console.log(num)
}


console.timeEnd("TIME")