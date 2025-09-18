const filter_list = list => {
    let newlist = []
    
    for (let i = 0; i < list.length; i++) {
        if(typeof (list[i]) === 'string') {
            continue;
        }
        else {
            newlist.push( list[i]);
        }
    }
    return newlist
}

console.log(filter_list([1, 2, 3, "4", "6"]));

