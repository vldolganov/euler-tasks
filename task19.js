//0(n^2)
console.time('TIME')
function task19() {
  let countSundays = 0; 

for (let year = 1901; year <= 2000; year++) { 
  for (let month = 0; month < 12; month++) { 
    let date = new Date(year, month, 1); 
    if (date.getDay() === 0) { 
      countSundays++; 
    }
  }
}
    return countSundays;  
}
console.log(task19())
console.timeEnd('TIME')
