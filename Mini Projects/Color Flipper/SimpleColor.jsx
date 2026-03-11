import { useState } from "react";
import './Color.css'

function SimpleColor() {
    let [state, setState] = useState(0);
    let palate = ["red", "orange", "yellow", "pink", "green", "blue"];

    function changeColor(){
        setState(state === palate.length -1? 0 : state+1)
    }

    return (
        <div className="box" style={{
           backgroundColor: palate[state]
        }}>
            <h1>Background Color: {palate[state].toUpperCase()}</h1>
            <button 
            onClick={() => changeColor()}>Change</button>

        </div>
    )
}

export default SimpleColor
