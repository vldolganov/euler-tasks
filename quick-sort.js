console.time('TIME')
function sortArr(arr) {
   if (arr.length <= 1) {
       return arr;
   }

   const pivot = arr[arr.length - 1];
   const leftArr = [];
   const rightArr = [];

   for (let i = 0; i < arr.length - 1; i++) {
       arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i])
   }

   return [...sortArr(leftArr), pivot, ...sortArr(rightArr)];
}
console.log(sortArr([100, 1, 0, -200, 312, 22, -12, -231, 3145, 33, 34, -232]));
console.timeEnd('TIME')
