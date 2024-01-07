let n = 5;
let string = "";
//pyramid
for(let i = 1 ; i <= n ; i++) {
    for(let j = 1 ; j <= i ; j++)  string += j+" " ;
    string += "\n";
}
//reverse-
for(let i = 1 ; i <= n ; i++) {
    for(let j = 1 ; j <= n-i ; j++)    string += j+" " ;
    string += "\n";
}
console.log(string);
