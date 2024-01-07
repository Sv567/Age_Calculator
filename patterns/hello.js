
// // const n = 5;
// // for (let i = 1; i <= n; i++) {
// //   let row = "";
// //   for (let j = 1; j <= i; j++) {
// //     row += "* ";
// //   }
// //   console.log(row);
// // }

// const n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j+" ";
//   }
//   console.log(row);
// }

let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j - i + 2+" ";
  }
  string += "\n";
}
console.log(string);