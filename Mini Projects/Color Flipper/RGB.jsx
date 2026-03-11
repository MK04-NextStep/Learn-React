import { useState } from "react"
import './Color.css'

function RGB() {

    let [state, setState] = useState("rgb(255,0,0)");

    function changeColor(){
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);

        let color = `rgb(${red}, ${green}, ${blue})`

        setState(color)
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

export default RGB
