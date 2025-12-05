import { Stack } from './06_stack.js'

function isValid(exp) {
    const stack = new Stack()
    for ( const char of exp){

        if(char === '<'){
            stack.push(char);
        }else if ( char === '>'){

            if (!stack.isEmpty() && stack.peek() === '<'){
                stack.pop();
            }else{
                return false
            }

        }

    }
    return stack.isEmpty()
}

console.log(isValid('<2-3>>'))
console.log(isValid('<<2h>>'))
console.log(isValid('df>'))
console.log(isValid('<'))