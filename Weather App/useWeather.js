import { useState, useEffect } from "react";
import axios from 'axios'
function useWeather(city) {
    let [data, setData] = useState("");
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null)

    useEffect(() => {
        setError(null)
        setLoading(true)
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=890c878d175a7ed0d83878fd4dcfecd0&units=metric`)
            .then((response) => {
                setData(response.data)
                setLoading(false);
            })
            .catch((err) => {
                setError("Error");
                setLoading(false);
            })

    }, [city])
    return [data, loading, error]
}

export default useWeather