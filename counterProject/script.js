const mainTitle = document.querySelector("#title");

let curVal = 0;
const btnIncrement = document.querySelector("#incre");
const btnReset = document.querySelector("#reset");
const btnDecrement = document.querySelector("#decre");
const btnPlus = document.querySelector("#plus");
const btnminus = document.querySelector("#minus");


btnIncrement.addEventListener("click" , () =>{
    curVal++;
    mainTitle.textContent = curVal ;
});

btnReset.addEventListener("click" , () =>{
    curVal = 0;
    mainTitle.textContent = curVal ;
});

btnDecrement.addEventListener("click" , () =>{
    curVal--;
    mainTitle.textContent = curVal ;
});

btnPlus.addEventListener("click" , () =>{
    curVal++;
    mainTitle.textContent = curVal ;
});

btnminus.addEventListener("click" , () =>{
    curVal--;
    mainTitle.textContent = curVal ;
});