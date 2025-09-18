const findAB = (arr, num) => {
    let result=[];
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
             if(num/arr[i]===arr[j]){
                return [ arr[i],arr[j]];
                
             }
        }
    }
    return null
}
console.log(findAB([1,0,2,3], 6));

