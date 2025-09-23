const counter = document.querySelector("#counter")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const resume = document.querySelector("#resume")
let duration = 0;
let interval = null
let check = false

const inputset = () => {
    let input2 = document.querySelector("#input")
    let input = input2.value.trim()
    if (input !== "" && !isNaN(parseInt(input))) {
        duration = parseInt(input)
        counter.innerText = duration;
        input2.value = ""
    }
}
const startCountDown = () => {
    if (interval === null && duration > 0) {
        interval = setInterval(() => {
            duration--
            counter.innerText = duration
            if (duration === 0) {
                clearInterval(interval)
                interval = null
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
document.querySelector("#reset").addEventListener("click",()=>{
    duration=0;
    counter.innerText=0;
    clearInterval(interval)
    interval=null;
    check=false
})
start.addEventListener('click', (e) => startCountDown())
resume.addEventListener('click', (e) => {
    if (check) {
        startCountDown()
    }
})
stop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    check = true
});