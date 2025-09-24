//closure function

const outer = () => {
    let name="nabeel"
    const inner = () => {
        console.log(name);
    }
    return inner
}
let test=outer()
test()