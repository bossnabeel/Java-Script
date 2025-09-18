const nospace = (str) => {
    let arr = str.split("");
    let result = ""
    for(let i of arr){
        if (i !== " ") {
            result += i
        }}
        // also .split(" ") instead of forof loop
    return result
}
console.log(nospace(" n ab e  el"));

