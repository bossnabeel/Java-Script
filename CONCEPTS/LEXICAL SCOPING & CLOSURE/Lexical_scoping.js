//lexical scoping
const outer = () => {
    let name="nabeel";
    const inner = () => {
        console.log(name);
    }
    inner();
}

outer()
