let userInput = document.getElementById("bday");
let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click",calculate());
function calculate(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1)
    {
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12+m2-m1;
    }
    result.innerHTML = `Your age is ${y3} years ${m3} months old.`;
}