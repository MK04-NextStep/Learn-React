import React, { useState } from 'react'
import './Color.css'

function Hex() {

    let [state, setState] = useState("#ff0000")

    function changeColor() {
        let red = Math.floor(Math.random() * 256).toString(16);
        let green = Math.floor(Math.random() * 256).toString(16);
        let blue = Math.floor(Math.random() * 256).toString(16);

        let color = `#${red}${green}${blue}`

        setState(color);
    }


    return (
        <div className="box" style={{
            backgroundColor: `${state}`
        }}>
            <h1>Background Color: {state.toUpperCase()}</h1>
            <button
                onClick={() => changeColor()}
                >Change</button>

        </div>
    )
}

export default Hex
