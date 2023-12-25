const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d4696ebc0mshc91b0f5482a0790p17c40djsnb36e013ea98e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
    cityname.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
           
            temp.innerHTML = response.temp;
            humidity.innerHTML = response.humidity;
            wind_speed.innerHTML = response.wind_speed;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
}

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    getWeather(city.value);
});
getWeather('srinagar');
