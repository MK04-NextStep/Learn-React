import { useParams } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import './Home.css'
import Products from "../../Products/Products"
import Search from "../../Components/Search/Search"
function Home({filter, setFilter}) {
    let {username} = useParams();

    return (
        <div className="home">
            <Navbar username={username}/>
            <div className="body">
                <Search setFilter={setFilter}/>
                <Products filter={filter}/>
            </div>
        </div>
    )
}

export default Home
