function bubbleSorte(arr) {
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

console.log([1, 6, 3, 8, 4, 2, 23, 32, 66, 89, 12, 11, 22, 21, 54, 9, 5, 7]);

console.log(
  bubbleSorte([1, 6, 3, 8, 4, 2, 23, 32, 66, 89, 12, 11, 22, 21, 54, 9, 5, 7])
);
