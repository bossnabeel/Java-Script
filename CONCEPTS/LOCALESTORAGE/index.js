let user = {
    Name: "Nabeel",
    Age: "18",
    Class: "xi"
};
localStorage.setItem("user", JSON.stringify(user))
let data = JSON.parse(localStorage.getItem("user"))
console.log(data);
let usr = document.createElement("h1")
let content = "";
for (const key in data) {
    content += `${key}:${data[key]} `;
}

usr.innerText=content
document.body.appendChild(usr);