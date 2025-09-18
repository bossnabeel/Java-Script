const summation = (number => {
    let sum = 0
    for (let i = 1; i < number + 1; i++) {
        sum += i;
    }

    return sum
});
console.log(summation(8));
