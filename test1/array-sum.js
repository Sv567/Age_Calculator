let arr = [1,2,3,4,5,6,7,8];
let target = 10;
let s = 0 , e = arr.length-1 ;
while(s < e) {
    if(arr[s]+arr[e] == target){
    console.log(arr[s]+" + "+arr[e]+" = "+target);
    s++;
    e--;
    }else if(arr[s]+arr[e] > target){
        e--;
    }else{
        s++;
    }
}