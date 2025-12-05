function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let left = 0;
  let right = arr.length;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2], 2));
