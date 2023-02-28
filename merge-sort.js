console.time('TIME')
  function sorted(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = sorted(arr.slice(0, mid))
    let right = sorted(arr.slice(mid))

    function merge(left, right) {
        let sortedArr = [] // the sorted items will go here
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            sortedArr.push(left.shift())
          } else {
            sortedArr.push(right.shift())
          }
        }
        return [...sortedArr, ...left, ...right]
      }

    return merge(left, right)
  }
  console.log(sorted([10, 231, 324, 11, 1, 3, 999]))


console.timeEnd('TIME')