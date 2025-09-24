// test 01
let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
        console.log("sucesses")
    },2000)
}).then()

//test 02
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject( "Failed!")
    },1000)
}).catch((error)=>{
    console.log(error);
})

//test 03
new Promise((resolve,reject)=>{
    resolve()
    console.log("done");
})
.then()
.finally(()=>{
    console.log("Clean Up!")
});

//test 04 changing

new Promise((resolve)=>{
    resolve()
    console.log("Start");
})
.then(()=>{
    console.log("middle");
}).then(()=>{
    console.log("end");
})