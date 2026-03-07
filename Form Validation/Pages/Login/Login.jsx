import { useContext, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import dataList from '../../Context/Detail'
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

function Login() {

    let [user, setUser] = useState("")
    let [pass, setPassword] = useState("")
    let [msg, setMsg] = useState("")
    let [show, setShow] = useState(false);

    let navigate = useNavigate()
    let { data } = useContext(dataList);

    function formSubmit(e) {
        e.preventDefault();

        let userData = data.find((item) => item.username === user);

        if (userData && userData.password == pass) {
            setMsg("Login Successfully!!!")
            navigate(`/home/` + user)
        } else {
            setMsg("Wrong Username or Password!!!")
        }
    }

    function resetForm() {
        setUser("")
        setPassword("")
    }

    return (
        <div className='login-page'>
            <h1>Login page</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" id='username' name='username' value={user}
                    onChange={(e) => setUser(e.target.value)} placeholder='Usename...' />
                <label htmlFor="password">Password: </label>
                <div className="password-line">
                    <input type={show ? "text" : "password"} id='password' name='password' value={pass}
                    onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />
                    <button type='button' onClick={() => setShow(!show)}>{show ? <IoMdEye /> : <FaEyeSlash />}</button>
                </div>
                <div className="button">
                    <button>Login</button>
                    <button type='button' onClick={resetForm}>Reset</button>
                </div>
                <Link to="/registration"><input type="button" value=" New User??" id='newuser' /></Link>
                <p>{msg}</p>

            </form>
        </div>
    )
}

export default Login
