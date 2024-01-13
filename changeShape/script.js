const btn = document.getElementById("change-color");
const btn2 = document.getElementById("change-shape");

const cont = document.getElementById("circle");

const allColors = ["blue","black","yellow"];
let colorButton = 0;

const color = document.getElementById("change-color");

btn.addEventListener("click", ()=>{
    if(colorButton==allColors.length){
        colorButton=0;
    }
    cont.style.backgroundColor= allColors[colorButton];
    colorButton++;
});


