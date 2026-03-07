import Login from './Pages/Login/Login'
import Register from './Pages/Registration/Register'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { useContext, useState } from 'react'

function App() {

  let [filter, setFilter] = useState({
    category: "all",
    range: 0,
    rating: 0
  })

  return(
    <div style= {{
  display: "flex";
  width: "100%";
  minHeight: "100vh";
    }}>

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/registration' element={<Register />}/>
        <Route path='/home/:username' element={
            <Home filter={filter} setFilter={setFilter}/>
        }/>
      </Routes>

    </div>
  )
}

export default App
