const squareDigits=digit=> {
    let str=String(digit).split("")
    let newstr=""
    for(let i=0; i<str.length; i++){
        newstr+=str[i]*str[i]
    }
    return Number(newstr)

}
console.log(squareDigits(45));
console.log("8"*"6");
