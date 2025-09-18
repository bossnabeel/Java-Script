const repeatStr = (str, count) => {
    let final = ""
    for (let i = 0; i < count; i++) {
        final +=" "+str;
    }
    return final
}
console.log(repeatStr('nabeel', 5));
