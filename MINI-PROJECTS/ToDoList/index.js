
let Add = document.querySelector("#Add-button")
let list = document.querySelector("#list")
let addtolist = () => {
    let input_task = document.querySelector("#input-task")
    if (input_task.value.trim() !== "") {
        let li = document.createElement("li")
        let button = document.createElement("button")
        button.innerText = "X"
        button.className = "remove"
        let text=document.createTextNode(input_task.value+" - ")
        li.append(text,button)
        list.append(li)
        input_task.value = ""
    }
}
Add.addEventListener("click", () => {
    addtolist()
});
let input_task = document.querySelector("#input-task")
input_task.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addtolist()
    }
});
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove()
    }
});
