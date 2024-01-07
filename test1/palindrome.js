
let str = "nanddnan";
let ans = "";
for(let i = str.length-1 ; i >= 0 ; i--) {
    ans += str[i];
}
console.log(str +"-"+ans);
if(ans == str) console.log("Palindorm");
else console.log("Not a PAlindrom");