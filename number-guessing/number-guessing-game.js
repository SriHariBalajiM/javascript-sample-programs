const minNum=1;
const maxNum=100;
let result= Math.floor(Math.random()* (maxNum-minNum))+minNum;
let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Enter a number between ${minNum} - ${maxNum}:`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`Enter a valid number!!`);
    }
    else if(guess>maxNum || guess < minNum){
        window.alert(`Enter a valid number!!`);
    }
    else{
        attempts++;
        if(guess>result){
            window.alert(`Too High!!Please try again..`);
        }
       else if(guess<result){
            window.alert(`Too Low!!Please try again..`);
        }
        else{
            running=false;
            window.alert(`Correct answer. You have taken ${attempts} attempts`);
        }
    }

}