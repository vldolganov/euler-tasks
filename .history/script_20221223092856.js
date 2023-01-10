console.time("TIME")

let count = 6;
let number = 14;


function task7(num){

  for(let i = 6; i < 10001; i++){
    if ((num % num === 0) && num % 1 === 0){
      num ++;
    } else {
      num++;
    }
  }
  return num;
}

console.log(task7(number))