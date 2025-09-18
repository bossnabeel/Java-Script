const squareSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
        sum += arr[i];
    }
    return sum
}

console.log(Sum([1, 2, 3, 4]));
