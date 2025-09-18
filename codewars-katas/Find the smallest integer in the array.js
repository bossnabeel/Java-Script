const findSmallestInt = (arr) => {
    let max = arr[0];
    arr.forEach(i => {
        if (i > max) {
            max = i;
        }
    });
    let min=max;
    arr.forEach(i=>{
        if(i<min){
            min=i;
        }
    })

return min;
}
let l = [1, 2, 3]
console.log(findSmallestInt(l));
const find=(arr=>{
    return Math.min(...arr);
});
let a=[1,23,4,3]
console.log(find(a));