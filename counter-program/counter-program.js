//counter program

const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn= document.getElementById("reset-btn");

const counterLabel= document.getElementById("counter-label");

let counterValue=0;

counterLabel.textContent=counterValue;

decreaseBtn.onclick= function(){
    counterValue--;
    counterLabel.textContent=counterValue;
}

increaseBtn.onclick= function(){
    counterValue++;
    counterLabel.textContent=counterValue;
    }

resetBtn.onclick= function(){
        counterValue=0;
        counterLabel.textContent=counterValue;
        }