//random password generator

const passwordLength= document.getElementById("passwordLength");
const lowercase= document.getElementById("lowercase");
const uppercase= document.getElementById("uppercase");
const number= document.getElementById("numbers");
const specialChars= document.getElementById("specialChars");
const result = document.getElementById("result");

const lowerChars= "abcdefghijklmnopqrstuvwxyz";
const upperChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers= "1234567890";
const specialCharacters= "!@#$%^&*()_+=-~<>?.,/:[]{}\|";

let length;
let allowedChars='';
let password='';

function toGenerate(){
    password='';
    allowedChars='';
    result.textContent = '';
    length=passwordLength.value;
    if(isNaN(length)){
        result.textContent = ''; // Clear the result
        window.alert(`Please enter a valid number as length for generating the password`);
        return;
    }
    else{
        length=Number(length);
        if(length<8){
            result.textContent = ''; // Clear the result
            window.alert(`Minimum length for generating the password must be 8.`);
            return;
        }
        else{
            if(!lowercase.checked && !uppercase.checked && !number.checked && !specialChars.checked){
                result.textContent = ''; // Clear the result
                window.alert(`Please select atleast any one option to generate a random password`);
                return;
            }

            else{
            if(lowercase.checked){
                allowedChars+= lowerChars;
            }
             if(uppercase.checked){
                allowedChars+=upperChars;
            }
            if(number.checked){
                allowedChars+=numbers;
            }
            if(specialChars.checked){
                allowedChars+=specialCharacters;
            }
            for(let i=0; i<length;i++){
                const randomIndex= Math.floor(Math.random()* allowedChars.length);
                password+=allowedChars[randomIndex];
            }
        }}
    }
    result.textContent=password;
}

