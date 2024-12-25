const choices=['rock','paper','scissors'];

const playersDisplay= document.getElementById('playersDisplay');
const computersDisplay=document.getElementById('computersDisplay');
const resultDisplay=document.getElementById('resultDisplay');
const playerScoreDisplay= document.getElementById('playerScoreDisplay');
const computerScoreDisplay= document.getElementById('computerScoreDisplay');

let playerScore=0;
let computerScore=0;


function playGame(playerChoice){

    const computerChoice= choices[Math.floor(Math.random() * choices.length)];
    let result='';

    if(playerChoice=== computerChoice){
        result=`IT'S A TIE!!`;
    }
    else{
        switch(playerChoice){
            case 'rock':
                result =(computerChoice==='scissors')?'You Win!!': 'You Lose!!';
                break;

            case 'paper':
                result =(computerChoice==='rock')?'You Win!!': 'You Lose!!';
                break;

            case 'scissors':
                    result =(computerChoice==='paper')?'You Win!!': 'You Lose!!';
                    break;
        }
    }

    resultDisplay.classList.remove('greenResult','redResult');

    playersDisplay.textContent=`Player's Choice:${playerChoice}`;
    computersDisplay.textContent=`computer's Choice:${computerChoice}`;
    resultDisplay.textContent=`${result}`;

    switch(result){
        case 'You Win!!':
            resultDisplay.classList.add('greenResult');
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case 'You Lose!!':
            resultDisplay.classList.add('redResult');
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break;   
    }
}