let counter = document.querySelector("#counter")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let resume = document.querySelector("#resume")
let duration = 0;

let interval=null
let check=false

let inputset = () => {
    let input2=document.querySelector("#input")
    let input = input2.value.trim()
    if (input!== ""&&!isNaN(parseInt(input))){
        duration=parseInt(input)
        counter.innerText=duration;
        input2.value=""
    }
}
let startCountDown = () => {
    if (interval===null && duration > 0) {
        interval = setInterval(() => {
            duration--
            counter.innerText = duration
            if (duration===0) {
                clearInterval(interval)
                interval=null
            }

        }, 1000);
    }
}

document.querySelector("#set").addEventListener('click', () => inputset());
document.querySelector("#input").addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        inputset()
    }
});
start.addEventListener('click',(e)=>startCountDown())
resume.addEventListener('click',(e)=>{
    if (check) {
        startCountDown()
    }
})
stop.addEventListener('click',()=>{
    clearInterval(interval);
    interval=null;
    check = true
});

