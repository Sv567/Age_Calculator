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
    mainTitle.style.color= generateRandomColor();

});

btnReset.addEventListener("click" , () =>{
    curVal = 0;
    mainTitle.textContent = curVal ;
    mainTitle.style.color= generateRandomColor();
});

btnDecrement.addEventListener("click" , () =>{
    curVal--;
    mainTitle.textContent = curVal ;
    mainTitle.style.color= generateRandomColor();
});

btnPlus.addEventListener("click" , () =>{
    curVal++;
    mainTitle.textContent = curVal ;
    mainTitle.style.color= generateRandomColor();
});

btnminus.addEventListener("click" , () =>{
    curVal--;
    mainTitle.textContent = curVal ;
    mainTitle.style.color= generateRandomColor();
});

function generateRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
  }