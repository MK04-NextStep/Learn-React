import Sidebar from './Sidebar'
import './Info.css'
function Info({ weatherData,changeWeather,city }) {
    let date = new Date()
    
    let show = `${date.getHours()}:${date.getMinutes()}- ${date.toDateString()}`
    return (
         <div className="information">
            <h1>{Math.floor(weatherData.main.temp)}&deg;</h1>
            <div className="city-info">
                <h2>{city}</h2>
                <p>{show}</p>
            </div>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}  />
        </div>
    )
}

export default Info
