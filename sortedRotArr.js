/* 
arr = [3,4,5,6,7,1,2]
find in this rotated array
time complexity should be O(log(n))
*/
let arr = [3, 4, 5, 6, 7, 1, 2];

function getPivot(arr, start, end) {
    !start ? start = 0 : 0;
    !end ? end = arr.length - 1 : 0;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid - 1]) return mid;
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[start] < arr[mid]) return getPivot(arr, mid + 1, end);
    if (arr[mid] < arr[end]) return getPivot(arr, start, mid);
    return 0;
}

function binarySearch(arr, a, start, end) {
    !start ? start = 0 : 0;
    !end ? end = arr.length - 1 : 0;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == a) return mid;
    if (start >= end) return -1;
    if (arr[mid] > a) return binarySearch(arr, a, start, mid);
    if (arr[mid] < a) return binarySearch(arr, a, mid + 1, end);
    return -1;
}

function findInRotatedArr(arr, a) {
    let pivot = getPivot(arr);

    if (a == arr[pivot]) return pivot;
    if (a <= arr[pivot - 1] && a >= arr[0]) return binarySearch(arr, a, 0, pivot - 1);
    else return binarySearch(arr, a, pivot, arr.length - 1);

}

console.log(findInRotatedArr([5, 6, 7, 8, 10, 1, 2, 3, 4], 6))