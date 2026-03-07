import { useContext } from "react";
import dataList from "../../Context/Detail";
import { useNavigate } from "react-router-dom";
import './Navbar.css'
function Navbar({ username }) {
    
    let {data, actionDB} = useContext(dataList);
    let navigate = useNavigate()

    let userData = data.find((item) => item.username === username);
  return (
    <nav>
        {
            userData ? 
            <h1>Welcome {userData.name}</h1>:
            <h1>Username Not Found</h1>
        }
        <p onClick={() => {
            actionDB("delete", userData);
            navigate("/")
        }}>Delete Account</p>
    </nav>
  )
}

export default Navbar
