//test 01
async function test4(re) {
  console.log("hello");
}
test4()

//test 02

let test2=async () => {
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Success!")
        },2000)
    }).then((v)=>console.log(v))
}
test2()
//test 03 try catch

async function test3() {
    try {
        let reponse=await p
        
    } catch (error) {
        console.log();
    }
}
// not understanding




new Promise((v,r)=>{
    if(false){
        r()
        console.log("pas");
    }else{
        v()
       
    }
})

async function test() {
    console.log("A");
    let data = await Promise.resolve("B");
    console.log(data);
    console.log("C");
}
test();
console.log("D");
