let str = "aabcccccaaa"
let ans = "";
let count = 1;
for(let i = 0 ; i < str.length ; i++) {
    if(str[i] == str[i+1]) {
        count++;
    }else{
        ans += str[i];
        ans += count;
        count = 1;
    }
}
console.log(str+" - "+ans);