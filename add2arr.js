//Given 2 arrays of integers  give output such that it represents the sum taken mathematically , please consider carry factor also

// Input: a = [1,2,3]
//        b = [3,4,5]
// Output:    [4,6,8]

// Input: a = [9,9,9]
//        b = [1,1,1]
// Output:  [1,1,1,0]

// Input: a = [3,4,9]
//        b =   [1,1]
// Output:    [3,6,0]

// Input: a =   [9,2]
//        b = [3,1,1]
// Output:    [4,0,3]

let a = [9, 2]
let b = [3, 1, 1]

function reverseArr(arr, start, end) {
    if (start >= end) return;
    swap(arr, start, end);
    reverseArr(arr, start + 1, end - 1);
    return arr;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function addArrays(a, b) {
    let x = a.length - 1;
    let y = b.length - 1;
    let res = [];
    let carry = 0;

    while (x >= 0 && y >= 0) {
        let sum = a[x] + b[y] + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        res.push(sum);
        x--;
        y--;
    }
    while (x >= 0) {
        let sum = a[x] + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        res.push(sum);
        x--;
    }
    while (y >= 0) {
        let sum = b[y] + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        res.push(sum);
        y--;
    }
    while (carry) {
        res.push(carry);
        carry--;
    }
    return (reverseArr(res, 0, res.length - 1))
}
console.log(addArrays(a, b))