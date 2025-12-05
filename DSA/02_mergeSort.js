function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let sortedLeft = mergeSort(left)
    let sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {

    let sorted = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++
        }
        if (left[i] > right[j]) {
            sorted.push(right[j]);
            j++
        }
    }

    while (i < left.length) {
        sorted.push(left[i]);
        i++
    }

    while (j < right.length) {
        sorted.push(right[j]);
        j++
    }

    return sorted

}

console.log([1, 6, 3, 8, 4, 2, 23, 32, 66, 89, 12, 11, 22, 21, 54, 9, 5, 7]);

console.log(mergeSort([1, 6, 3, 8, 4, 2, 23, 32, 66, 89, 12, 11, 22, 21, 54, 9, 5, 7]))