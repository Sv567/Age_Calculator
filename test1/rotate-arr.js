let arr = [1,2,3,4,5,6,7,8];
let n = 3;

for(let i = 0 ; i < n ; i++){
    arr.unshift(arr.pop());
}
console.log("rotated array is - "+arr);