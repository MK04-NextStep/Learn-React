import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import MenuBundle from "./MenuBundle";
import './Home.css'

function Home() {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className="body">
            <div className="navbar">
                <GiHamburgerMenu onClick={() => setOpenSidebar(!openSidebar)} />
                <h1>Dynamic Menu</h1>
            </div>
            {openSidebar && (
                <div className="sidebar">
                    <RxCross2 onClick={() => setOpenSidebar(false)} />
                    <MenuBundle
                        title="First"
                        total={3}
                        message="Hey there thanks for coming"
                    />
                    <MenuBundle
                        title="Second"
                        total={3}
                        message="Oh okay hey there"
                    />
                    <MenuBundle
                        title= "Third"
                        total={2}
                        message = "I am in third one"
                    />
                    <MenuBundle 
                        title="Fourth"
                        total={1}
                        message = "Oh i am the last one"
                    />
                </div>
            )}
        </div>
    )
}
export default Home
