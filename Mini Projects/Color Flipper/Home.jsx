import { useState } from "react"
import Hex from "./Hex"
import Navbar from "./Navbar"
import RGB from "./RGB"
import SimpleColor from "./SimpleColor"
import './App.css'

function Home() {
    let [option, setOption] = useState("simple");
    return(
        <div className="body">
            <Navbar setOption={setOption} />
            {
                option === "rgb"?
                <RGB />:
                option === "hex"?
                <Hex />:
                <SimpleColor />
            }
        </div>
    )
}
export default Home
