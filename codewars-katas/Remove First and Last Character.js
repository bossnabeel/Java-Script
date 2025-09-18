function removeChar(str) {
    let arr = str.split("");
    arr.pop()
    arr.shift()
    return arr.join("")
};
console.log(removeChar('nabeel'));
