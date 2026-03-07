import { useContext, useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import dataList from '../../Context/Detail';
function Register() {
  let [name, setName] = useState("");
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  let [msg, setMsg] = useState("");

  let { data, actionDB } = useContext(dataList);
  let navigate = useNavigate();

  function Register(e) {
    e.preventDefault();
    let existed = data.find((item) => item.username === user);

    if (existed !== undefined) {
      setMsg("Already Existed");
    } else {
      actionDB("add", {
        name: name,
        username: user,
        pass: pass
      })
      navigate("/")
    }
  }

  return (
    <div className='register-page'>
      <h1>Register Now</h1>
      <form onSubmit={(e) => Register(e)} >
        <label htmlFor="name">Enter Your Name: </label>
        <input type="text" value={name} id='name' onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name...' />
        <label htmlFor="user">Enter Username:</label>
        <input type="text" value={user} id='user' onChange={(e) => setUser(e.target.value)} placeholder='Set Username...' />
        <label htmlFor="pass">Enter Password: </label>
        <input type="text" value={pass} id='pass' onChange={(e) => setPass(e.target.value)} placeholder='Set Password...' />
        <button>Sumit</button>
      </form>
      <p>{msg}</p>

    </div>
  )
}

export default Register
