fetch("https://jsonplaceholder.typicode.com/posts/1").then((r) => {
    return r.json()
}).then((r) => {
    console.log(r);
})
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
