const changeLocation =document.getElementById("change-locatin")
const card =document.getElementById("card")
const details=document.getElementById("details")
const weatherIcon =document.getElementById("weather-icon")


///update ui
const updateUI =(weather)=>{
    console.log(weather)
    details.innerHTML =`
    <h5 class="mb-3"> ${weather.name},${weather.sys.country}</h5>
    <p class="mb3">${weather.weather[0].main}</p>
    <div class="display-4 mb-3"></div>
    <span>${Math.round(weather.main.temp)}</span>
    <span>$deg;C</span>
    </div> 
    </div>`;
    
}
 /////get weather
const getweather =async(city) => {
    const data = await getdata(city)
    re
}
//get location
changeLocation.addEventListener("submit",(e) =>{
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getweather(cityName).then((data)=> updateUI(data))
})
