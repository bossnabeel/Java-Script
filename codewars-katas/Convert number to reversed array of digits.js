const digitize = (number) => {
    let arr = String(number).split("")
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = Number(arr[i]);

    }
    return newarr.reverse();
}
console.log(digitize(12345));
