'use strict';

//investigate api documentation and get api key and construct url
const baseApi = 'https://api.openweathermap.org/data/2.5/weather?';

const appid = '1feb7e6cd419eb96c260230925e2b0a9';


//create getWeather function
function getWeather(city){
  const api = `${baseApi}q=${city}&units=imperial&appid=${appid}`
  
  fetch(api)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
    
  })
  .then(responseJson => displayResults(responseJson))
  .catch(err => {
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  
  })

}

//create displayResults function
function displayResults(responseJson) {
  $('#results').empty();
  $('#results').append(`<h3>${JSON.stringify(responseJson.main.temp)} &#176;F</h3>`)
  
    
  
}

//create watchForm function
function watchForm() {
 $('form').submit(event => {
   event.preventDefault();
   const q = $('.citySearch').val();
   getWeather(q);
 });
 
}


$(watchForm)
 

