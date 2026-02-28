import './Weather.css'
import { useState } from 'react';
function Search({ changeWeather, city }) {
    let [inputCity, setInputCity] = useState(city);
    return (
        <div className='search'>
            <input type="text" value={inputCity}
                onChange={(e) => setInputCity(e.target.value)} placeholder="enter your city.." />
            <button onClick={() => changeWeather(inputCity)} >Submit</button>
        </div>
    )
}

export default Search
