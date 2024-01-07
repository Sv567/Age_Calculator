let n = 5;
let string = "";
//upper part
for(let i = 1 ; i <= n ; i++){ // rowloop
    for(let j = 1 ; j <= n-i ; j++) string += "  "; //loop for spaces
    for(let k = 1 ; k <= i ; k++) string += k+" "; //loop for print numbers
    string += "\n";
}
//lower part
for(let i = 1 ; i <= n-1 ; i++){ // rowloop
    for(let j = 1 ; j <= i ; j++) string += "  "; //loop for spaces
    for(let k = 1 ; k <= n-i ; k++) string += k+" "; //loop for print numbers
    string += "\n";
}
console.log(string);
