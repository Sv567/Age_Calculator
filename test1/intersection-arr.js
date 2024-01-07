
let arr1 = [7,1,3,6,5];
let arr2 = [8,3,6,2,7];
let ans = "";
let p = 0;
while(p < arr2.length){
for(let i = 0 ; i < arr1.length ; i++){
    if(arr2[p] == arr1[i]){
        ans += arr1[i]+" ";
        }
    }
    p++;
}
console.log(ans);
    