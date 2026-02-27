import { useState } from 'react'
import './Navbar.css'
function Navbar({ completedTask,notCompleted,fullList, clearList, searchTask }) {
  let [searchVal, setVal] = useState("");
  return (
    <nav>
      <h1>ToDo list</h1>
      <ul>
        <li onClick={clearList}>Clear</li>
        <li onClick={completedTask}>Completed</li>
        <li onClick={notCompleted}>Not Completed</li>
        <li onClick={fullList}>Full List</li>
      </ul>
      <div className='search-task'>
        <input type="text" value={searchVal} onChange={(e) => setVal(e.target.value)} placeholder='Enter task here' />
      <button onClick={() => {
        searchTask(searchVal);
        setVal("")
      }}>Search</button></div>

    </nav>
  )
}

export default Navbar
