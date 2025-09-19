
let Add = document.querySelector("#Add-button")
let list = document.querySelector("#list")

Add.addEventListener("click", () => {
    let input_task = document.querySelector("#input-task")
    if (input_task.value.trim() !== "") {
        let li = document.createElement("li")
        let button = document.createElement("button")
        button.innerText = "X"
        button.className = "remove"
        li.innerText = input_task.value
        list.append(li)
        li.append(button)
        input_task.value = ""
    }
});
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove()
    }
});