let str1 = ['a','n','a','g'];
let str2 = ['g','a','a','n'];

if(str1.length == str2.length) {
     str1.sort();
     str2.sort();
     for(let i = 0 ; i < str1.length ; i++){
         if(str1[i] != str2[i]) {
            console.log("false");
            return;
         }
     }
}else{
    console.log("false");
    return;
}

console.log("true");