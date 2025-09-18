const positiveSum = (arr => {
    let sum = 0
    for (i of arr) {
        if (0 < i) {
            sum += i
        }
    }
    return sum
});
let set = [1, 4, 5, -3];
console.log(positiveSum(set));
