console.time("TIME")

let count = 6;

function task7(num){
  while(count != 10001){
    if (!(num % num) && !(num % 1)){
      count++;
      num ++;
    }  
    num++
  }
}

console.log(task7(num))


console.timeEnd("TIME")