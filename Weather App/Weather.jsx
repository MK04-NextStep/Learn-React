import { useState, useEffect } from "react"
import { ImSpinner9 } from "react-icons/im";
import Error from "./Error";
import useWeather from "./useWeather";
import Info from "./Info";
import Sidebar from "./Sidebar";
import './Weather.css'
import './App.css'

function Weather() {
    let [Background, setBackground] = useState("clear-bg")
    let [city, setCity] = useState("Ludhiana");
    let [weatherData, loading, error] = useWeather(city);

    function changeWeather(inputVal) {
        setCity(inputVal);
    }

    useEffect(() => {
        if (loading || error) {
            setBackground(BgImages("default"))
        }
        else if (weatherData?.weather) {
            setBackground(
                BgImages(weatherData.weather[0].main)
            )
        }
    }, [loading, error, weatherData])

    function BgImages(weatherDetail = "") {
        switch (weatherDetail) {
            case "Clear":
                return "clear-bg"
            case "Clouds":
                return "cloudy-bg"
            case "Rain":
                return "rainy-bg"
            case "Thunderstorm":
                return "storm-bg"
            case "Snow":
                return "snow-bg"
            case "Mist":
                return "mist-bg"
            case "default":
                return "default-bg"
            default:
                return "default"
        }
    }

    if (loading) {
        return (
            <div className={`weather ${Background}`}>
                <ImSpinner9 />
                <Sidebar weatherData={weatherData} changeWeather={changeWeather} city={city} />
            </div>
        )
    }
    else if (error) {
        return (
            <div className={`weather ${Background}`}>
                <Error />
                <Sidebar weatherData={""} changeWeather={changeWeather} city={""} />
            </div>
        )
    } else {
        return (
            <div className={`weather ${Background}`}>
                <Info weatherData={weatherData} changeWeather={changeWeather} city={city} />
                <Sidebar weatherData={weatherData} changeWeather={changeWeather} city={city} />
            </div>
        )
    }
}

export default Weather
