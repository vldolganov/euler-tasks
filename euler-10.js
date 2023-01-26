console.time('TIME')
function solvedTask() {
    const isPrime = x => {
        if (x <= 3)
            return true
        if (x % 2 === 0)
            return false
        for (let i = 3; i <= Math.sqrt(x); i += 2) {
            if (x % i === 0)
                return false
        }

        return true
    }
    let sum = 0
    for (let i = 2; i < 2000000; i++) {
        if (isPrime(i))
            sum += i
    }
    console.log(sum)
}

solvedTask()

console.timeEnd('TIME')