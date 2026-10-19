'use strict'


const param = {
    link: 'https://api.openweathermap.org/data/2.5/weather',
    appid: '819ff849d6d8722dcf9d240171a2a950',
}

const cityNameRadio = document.querySelector('#city-name-radio')
const cityIdRadio = document.querySelector('#city-id-radio')
const cityName = document.querySelector('#city-name')
const cityId = document.querySelector('#city-id')


function radioButt() {
    if(cityNameRadio.checked){
        cityId.disabled = true;
        cityName.disabled = false;
        cityId.value = ''
    }else{
        cityName.disabled = true;
        cityId.disabled = false;
        cityName.value =''
    }
}
cityNameRadio.addEventListener('change', radioButt);
cityIdRadio.addEventListener('change', radioButt);
radioButt()



async function getWeather(){
    const cityNameVal = cityName.value
    const cityIdVal = cityId.value
    let url = ''

    if(cityNameRadio.checked){
        url = `${param.link}?q=${cityNameVal}&units=metric&appid=${param.appid}`
    } else {
        url = `${param.link}?id=${cityIdVal}&units=metric&appid=${param.appid}`
    }

    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('Error request')
        }

            const data = await response.json()
            const currentTemperature = data.main.temp
            const currentWind = data.wind.speed
            const currentHumidity = data.main.humidity

            document.querySelector('#temprature').value = Math.round(currentTemperature) + ' °C'
            document.querySelector('#wind-speed').value = currentWind + ' m/s'
            document.querySelector('#humidity').value = currentHumidity + ' %'
        
    } catch (error) {
        console.log(error)
    }
}


const weatherButton = document.querySelector('#weather-btn')
weatherButton.addEventListener('click', (e) => {
    e.preventDefault()
    getWeather()
})