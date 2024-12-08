//temperature conversion program

const value=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");

let temp;

function toConvert(){
    if(toFahrenheit.checked){
         temp=Number(value.value);
        temp= (temp*9/5) +32;
        result.textContent=`${temp.toFixed(1)} F`;
    }
    else if(toCelsius.checked){
         temp=Number(value.value);
        temp= (temp-32) * 5/9;
        result.textContent=`${temp.toFixed(1)} C`;
    }
    else{
        result.textContent=`Please select the unit!!`;
    }
}