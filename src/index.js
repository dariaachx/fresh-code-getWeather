'use strict'

// const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

const param = {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    appid: '819ff849d6d8722dcf9d240171a2a950',
}

function getWeather(){
    const cityName = document.querySelector('#city-name').value
    const cityId = document.querySelector('#city-id').value

    const currentTemperature = document.querySelector('#temprature')
    currentTemperature = data.main.temp

    const currentWind = document.querySelector('#wind-speed')
    currentTemperature = data.wind.speed

    const currentHumidity = document.querySelector('#humidity')
    currentTemperature = data.main.humidity
    
    const cityNameRadio = document.querySelector('#city-name-radio')
    const cityIdRadio = document.querySelector('#city-id-radio')

    cityNameRadio.addEventListener('click', (event) => {
        fetch(
        `${param.url}?id=${param.cityName}&units=metric&appid=${param.appid}`
        )
    })
    cityIdRadio.addEventListener('click', (event) => {
        fetch(
        `${param.url}?id=${param.cityId}&units=metric&appid=${param.appid}`
        )
    })

    
    .then((weather) => {
        console.log(weather)
        if(!weather.ok) throw new Error('Error')
        return weather.json()
    })
    .then((data) => (
        console.log(data)
    ))
    .catch((error) => {
        console.log(error)
    })
}
// getWeather()