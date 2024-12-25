//WEATHER APP

const weatherForm =document.querySelector('.weatherForm');
const cityInput =document.querySelector('.cityInput');
const card =document.querySelector('.card');

const apiKey='cfea71a3f2d8bcb56ed3a76866733256';

weatherForm.addEventListener('submit',async event=>{
 
    event.preventDefault();
    const city= cityInput.value;

    if(city){
        try{
            const weatherData= await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayErrorMessage(error);
        }
    }
    else{
        displayErrorMessage('Please enter the city');
    }
});

async function getWeatherData(city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const weatherResponse = await fetch(apiUrl);

    if(!weatherResponse.ok){
        throw new Error('Could not fetch the weather data!!');
    }

    return await weatherResponse.json();
}

async function displayWeatherInfo(data){
    const {name:city, 
            main:{temp,humidity},
            weather:[{id,description}]} =data;

    card.textContent='';
    card.style.display="flex";

    const cityDisplay= document.createElement('h1');
    const tempDisplay= document.createElement('p');
    const humidityDisplay= document.createElement('p');
    const descriptionDisplay= document.createElement('p');
    const emojiDisplay= document.createElement('p');

    cityDisplay.textContent=city;
    tempDisplay.textContent=`${(temp-273.15).toFixed(2)}C`;
    humidityDisplay.textContent=`Humidity:${humidity}%`;
    descriptionDisplay.textContent= description;
    emojiDisplay.textContent=await getWeatherEmoji(id);

    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descriptionDisplay.classList.add('descriptionDisplay');
    emojiDisplay.classList.add('emojiDisplay');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(emojiDisplay);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId>=200 && weatherId<=300):
            return '🌩️';
        
         case (weatherId>=300 && weatherId<=400):
            return '⛈️';

        case (weatherId>=500 && weatherId<=600):
            return '🌧️';

        case (weatherId>=600 && weatherId<=700):
            return '🌨️';

        case (weatherId>=700 && weatherId<=800):
            return '🌪️';

        case (weatherId === 800):
            return '☀️';

        case (weatherId>=800 && weatherId<=810):
            return '☁️';

        default:
            return '☀️';
    }
}

function displayErrorMessage(message){
    const errorMsg= document.createElement('p');
    errorMsg.textContent=message;
    errorMsg.classList.add('errorDisplay');

    card.textContent='';
    card.style.display="flex";
    card.appendChild(errorMsg);
}