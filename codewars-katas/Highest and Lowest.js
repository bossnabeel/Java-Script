const highAndLow=str=>{
    let arr=str.split(" ")
    let max=Number(arr[0]);
    for(let i of arr) {
        if (Number(i) > max) {
            max = Number(i);
        }
    }
    let min=Number(arr[0]);
    for(let i of arr){
        if(Number(i)<min){
            min=Number(i);
        }
    }
    let result=String(max+" "+min)
    return result
}
console.log(highAndLow("1 2 4 5 6 -9 0 5 -4"))