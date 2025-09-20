let textbox=document.querySelector("#textbox")
let charcount=document.querySelector("#charcount")
textbox.addEventListener("input",()=>{
    charcount.innerHTML=`Characters: ${textbox.value.length}`
});