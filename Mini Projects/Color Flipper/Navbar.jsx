import './Navbar.css'
function Navbar({ setOption }) {

    return (
        <nav >
            <h1>Code Generator</h1>
            <ul>
                <li onClick={() => setOption("simple")}>
                    Simple</li>
                <li
                onClick={() => setOption("rgb")}
                >RGB</li>
                <li
                onClick={() => setOption("hex")}
                >Hex</li>
            </ul>
        </nav>
    )
}

export default Navbar
