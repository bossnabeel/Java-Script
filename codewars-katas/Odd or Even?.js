const oddOrEven=arr=> arr.reduce((a,b)=>a+b)%2===0 ?  "even":"odd"

console.log(oddOrEven([1,2,3,1]));
