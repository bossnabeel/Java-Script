// ==============
// 1. ALGORITHMS 
// ==============

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sorted = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        sorted.push(left[i]);
        i++;
    }
    while (j < right.length) {
        sorted.push(right[j]);
        j++;
    }
    return sorted;
}

function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// =================================================================
// 2. TESTING HARNESS
// =================================================================

/**
 * N size random number array generator
 */
function generateRandomArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100000));
    }
    return arr;
}

/**
 * Performance tester.
 * @param {Function} algorithm - Sort function
 * @param {number} size - Array size
 */
function runTest(algorithm, size) {
    // New array generate for both test input is same
    const original = generateRandomArray(size);
    //Make a deep copy of Array so bubble wont modify the original array
    const arrToTest = [...original];

    const start = performance.now();
    algorithm(arrToTest);
    const end = performance.now();

    // Return time in millisoconds
    return (end - start).toFixed(4);
}

// =================================================================
// 3. EXECUTION
// =================================================================

const arraySize = 100000; // 👈 100 Thousand Elements

console.log(`--- Starting Performance Test with N = ${arraySize} ---`);

// Test 1: Merge Sort (O(N log N))
const timeMerge = runTest(mergeSort, arraySize);
console.log(`Merge Sort (O(N log N)) Time: ${timeMerge} ms`);

// Test 2: Bubble Sort (O(N^2))
const timeBubble = runTest(bubbleSort, arraySize);
console.log(`Bubble Sort (O(N^2)) Time: ${timeBubble} ms`);

console.log(`\nConclusion: For large N, Merge Sort is expected to be MUCH faster.`);