const rmvowel = str => {
    let arr = str.split("");
    let newstr=""
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === 'A' || arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'i' || arr[i] === 'O' || arr[i] === 'o' || arr[i] === 'u'||arr[i] === 'U' ) {
           continue;
        }
        else{
            newstr+=arr[i];
        }
 }
 return newstr
}
console.log(rmvowel("I am now learning JavaScript"));
