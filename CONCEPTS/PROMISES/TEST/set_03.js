/*Q1:
    Ek promise banao jo 2 second ke baad "Hello from Promise" resolve kare aur usko .then() se print karo.*/
new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello From Promise")
    }, 2000);
}).then((v) => {
    console.log(v);
});
/*Q2:
Ek promise likho jo 1 second baad reject ho jaye with error "Something went wrong", aur usko .catch() se handle karo.*/
new Promise((_, reject) => {
    setTimeout(() => {
        reject("Something went wrong")
    }, 1000);
}).catch((error) => {
    console.log(error);
});
/*Q3:
Ek async function likho jo await se ek promise ka result le (jo "Done!" return kare after 1 sec) aur usko console pe print kare */
let p = new Promise((r) => {
    setTimeout(() => {
        r("done")
    }, 1000)
});
async function run() {
    let result = await p;
    console.log(result);
}
run();
/*Q4:
Niche wale code ka output kya hoga?

async function test() {
  console.log("A");
  let data = await Promise.resolve("B");
  console.log(data);
  console.log("C");
}
test();
console.log("D"); */
// answer is  A 
//            D
//            B
//            C

/*Q5:
Ek async function likho jo:

*pehle ek promise wait kare jo 1 sec baad "First" return kare

*phir doosra promise wait kare jo 500ms baad "Second" return kare

*aur finally console me "Done All" print kare.
 */
let p1 = new Promise((r) => {
    setTimeout(() => {
        r("First")
    }, 1000)
})
let p2 = new Promise((r) => {
    setTimeout(() => {
        r("Second")
    }, 500)
})
async function run2() {
    let r1 = await p1;
    console.log(r1);
    let r2 =await p2;
    console.log(r2);
    console.log("Done All");
}
run2()