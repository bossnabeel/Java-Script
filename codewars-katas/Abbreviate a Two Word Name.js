const abbrevName = (str => {
    let arr = str.split("")
    let abvert = ""
    abvert += arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == " ") {
            abvert += "." + arr[i + 1];
        }
    }
    return abvert.toUpperCase();
})
console.log(abbrevName("nabeel rashid khan"));
