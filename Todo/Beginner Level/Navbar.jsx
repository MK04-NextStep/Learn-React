import './Navbar.css'
function Navbar({ clearList,completedTask, notCompleted, fullList }) {
  return (
    <nav>
      <h1>ToDo list</h1>
      <ul>
        <li onClick={clearList}>Clear</li>
        <li onClick={completedTask}>Completed</li>
        <li onClick={notCompleted}>Not Completed</li>
        <li onClick={fullList}>Full List</li>
      </ul>

    </nav>
  )
}

export default Navbar
