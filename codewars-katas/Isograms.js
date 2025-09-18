const isIsogram = str => {
    arr = str.toLowerCase().split("");
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }

        }
    }
    return true;

}

console.log(isIsogram("moOse"));
