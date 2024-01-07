let n = 5 ;
let string = "";
//pyramid
for(let i = 1 ; i <= n ; i++){
    for(let j = i ; j >= 1 ; j--) string+= j+" " ;
    string += "\n";
}
//reverse pyramid-
for(let i = 1 ; i <= n-1 ; i++){
    for(let j = n-i ; j>= 1 ; j--) string += j+" ";
    string += "\n";
}
console.log(string);