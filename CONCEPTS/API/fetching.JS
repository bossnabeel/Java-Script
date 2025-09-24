fetch("https://jsonplaceholder.typicode.com/posts/1").then((r) => {
    return r.json()
}).then((r) => {
    console.log(r);
}).catch((error)=>{
    console.log(error);
})
// with asyc function for good understanding
async function testApi() {
    let response=await fetch("https://jsonplaceholder.typicode.com/posts/10");
    let data = await response.json()
    console.log(data);
}
testApi()
