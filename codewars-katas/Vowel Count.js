const getCount = str => {
    let count = 0
    for (let i of str) {
        if (i === 'A' || i === 'a' || i === 'e' || i === 'E' || i === 'I' || i === 'i' || i === 'O' || i === 'o' || i === 'u'||i === 'U' ) {
            count++
        }
    }
    return count;
}
console.log(getCount("nabeel"));
