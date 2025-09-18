let solution = (str => {
    let arr = str.split("");
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    } return arr.join("")
});
console.log(solution(""));