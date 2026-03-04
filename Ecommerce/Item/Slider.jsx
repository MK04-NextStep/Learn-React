import React, { useState } from 'react'
import './Slider.css'
function Slider({ data }) {
    let [index, setIndex] = useState(0);

    function prevImg() {
        index === 0 ?
            setIndex(data.length - 1) :
            setIndex(index - 1);
    }
    function nextImg() {
        index === data.length - 1 ?
            setIndex(0) :
            setIndex(index + 1);
    }
    return (
        <div className='slider'>
            <button onClick={prevImg} className='buttonLeft'>{"<"}</button>
            <img src={data[index]}/>
            <button onClick={nextImg} className='buttonRight'>{">"}</button>
        </div>
    )
}

export default Slider
