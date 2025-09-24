let data1={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "nabel",
            username: "khnk--",
            email: "nabeel@example.com"
        })
    }
fetch("https://jsonplaceholder.typicode.com/users",data1)
    .then((response) => response.json())
    .then((data) => console.log("promise",data))
    .catch(() => console.log("Error"))

async function addUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users",data1 )
    let data = await response.json()
    console.log("async",data);
}
addUser()
