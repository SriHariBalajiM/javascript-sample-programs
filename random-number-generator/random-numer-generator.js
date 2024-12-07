// random dice roller

const randomValue1 =document.getElementById("value1");
const randomValue2 =document.getElementById("value2");
const randomValue3 =document.getElementById("value3");

const rollBtn =document.getElementById("roll-btn");

const min=1;
const max=6;

let value1;
let value2;
let value3;

rollBtn.onclick=function(){
    value1=Math.floor(Math.random()*max)+min;
    value2=Math.floor(Math.random()*max)+min;
    value3=Math.floor(Math.random()*max)+min;

    randomValue1.textContent=value1;
    randomValue2.textContent=value2;
    randomValue3.textContent=value3;
}