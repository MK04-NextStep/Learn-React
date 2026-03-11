import { useState } from 'react'
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import './Home.css'
function Home() {
    let total = 5;
    let [selected, setSelected] = useState(0);
    return(
        <div className="body">
        <h1>Star Rating</h1>
        <div className="stars">
            {
                Array.from({ length: total}, (_,i) => {
                    const value = i + 1
                    return value <= selected ?
                        <FaStar key={value} onClick={() => setSelected(value)}/> :
                        <FaRegStar key={value} onClick={() => setSelected(value)}/>
                })
            }
        </div>
        { selected > 0 && <p>Rating: {selected}</p> }
        <button onClick={() => setSelected()}>Clear Rating</button>
    </div>
    )
}
export default Home
