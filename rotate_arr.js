//Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.
// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
// Output: 5 6 7 1 2 3 4

let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 2;

// function rotateArr(arr, d) {
//     //time complexity O(n)
//     //space complexity O(n)
//     let temp = [];//get new array for result
//     /* 
//     n=7,d=2
//     0-->5
//     1-->6
//     2-->0
//     3-->1
//     4-->2
//     5-->3
//     6-->4

//     i-d % n
//     0-2 =7-2 
//     1-2 =7-1 
//     2-2 = 0

//     */
//     let n = arr.length;
//     d = d % n;
//     for (let i = 0; i < arr.length; i++) {
//         let shiftIdx = (i - d) < 0 ? (i - d) + n : (i - d);
//         temp[shiftIdx] = arr[i];
//     }
//     return temp;
// }

// function rotateArr(arr, d) {
//     //time complexity O(n*d)
//     //space complexity O(1)
//     let p = 0;
//     let n = arr.length;
//     while (p < d) {
//         let last = arr[0]
//         for (let i = 0; i < n; i++) {
//             arr[i] = arr[i + 1];
//         }
//         arr[n - 1] = last;
//         p++;
//     }
//     return arr;
// }

// function gcd(a, b) {
//     if (b == 0) return a;
//     else return gcd(b, a % b);
// }

// function rotateArr(arr, d) {//juggling algo
//     //arr =[1,2,3,4,5,6,7,8,9,10,11,12] d=3
//     //gcd 
//     /* 
//     1st step 1,4,7,10 --> 4,7,10,1
//     2nd step 2,5,8,11 --> 5,8,11,2
//     3rd step 3,6,9,12 --> 6,9,12,3
//     4,5,6,7,8,9,10,11,12,1,2,3
//     */
//     //time complexity O(n)
//     //space complexity O(1)
//     let n = arr.length;
//     d = d % n;
//     let g_c_d = gcd(n, d);

//     for (let i = 0; i < g_c_d; i++) {
//         let j = i;
//         let temp = arr[i];
//         let k = 0;
//         while (1) {
//             k = j + g_c_d
//             if (k >= n) {
//                 arr[j] = temp
//                 break;
//             }
//             arr[j] = arr[k];
//             j = k;
//         }
//     }
//     return arr;
// }
// console.log(gcd(5,3))
// console.log(rotateArr([1, 2, 3, 4, 5,6,7,8,9,10,11,12], 3));


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function reverseArr(arr, start, end) {
    if (start >= end) return;
    swap(arr, start, end);
    reverseArr(arr, ++start, --end);
    return arr;
}
function rotateArr(arr, d) {//using reversal algo
    /* time complexity O(n) space complexity O(1) */
    let n = arr.length;
    d = d % n;
    reverseArr(arr, 0, d - 1);
    reverseArr(arr, d, n - 1);
    reverseArr(arr, 0, n - 1);
    return arr;

}
console.log(rotateArr([1, 2, 34, 5, 7], 6)) 
