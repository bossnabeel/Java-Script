const basicOp = (opt, num, num2) => {
    let ans = 0;
    switch (opt) {
        case "+":
            return num + num2;
            break;
        case "-":
            return num - num2;
            break;
        case "/":
            return num2 === 0 ? "enter num above to zero" : num / num2;
            break;
        case "*":
            return num * num2;
            break;
        default:
            return -1;
            break;
    }
}
console.log(basicOp("+",10 ,38))
console.log(basicOp("-",10 ,38))
console.log(basicOp("*",10 ,38))
console.log(basicOp("/",10 ,38))
console.log(basicOp(".",10 ,0))
console.log(basicOp("/",10 ,0))