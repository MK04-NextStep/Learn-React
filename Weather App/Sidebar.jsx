import './Sidebar.css'
import Search from './Search';
function Sidebar({ weatherData, changeWeather, city }) {
    if (!weatherData || city == "") {
        return(
            <div className="sidebar">
                 <Search changeWeather={changeWeather} city={""} />
            </div>
        )
    }else{
        return (
            <div className="sidebar">
                <Search changeWeather={changeWeather} city={city} />
                <div className="info">
                    <h3>{weatherData.weather[0].main.toUpperCase()}</h3>
                    <ul>
                        <li><p>Maximum Temperature</p> {weatherData.main.temp_max}</li>
                        <li><p>Minimum Temperature</p> {weatherData.main.temp_min}</li>
                        <li><p>Humidity</p> {weatherData.main.humidity}</li>
                        <li><p>longitude</p> {weatherData.coord.lon}</li>
                        <li><p>lagnitude</p> {weatherData.coord.lat}</li>
                        <li><p>Wind Speed</p> {weatherData.wind.speed}</li>
                        <li><p>Wind degree</p> {weatherData.wind.deg}</li>
                        <li><p>Wind Gust</p> {weatherData.wind.gust}</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Sidebar
