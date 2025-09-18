const accum=str=>{
    let arr=rev
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0 ; j<i; j++) {
            arr[j]+=arr[j]
        }
    }
    let result= arr.join("-");
    return result;
}
console.log(accum("nabeel"));
