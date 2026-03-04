import { useContext } from 'react'
import './Navbar.css'
import TodoList from './ToDoList';
function Navbar({setFilterType }) {
  let todoValue = useContext(TodoList);
  return (
    <nav>
      <h1>ToDo list</h1>
      <ul>
        <li onClick={todoValue.clearList}>Clear</li>
        <li onClick={()=> setFilterType("completed") }>Completed</li>
        <li onClick={()=> setFilterType("notCompleted")}>Not Completed</li>
        <li onClick={() => setFilterType("all")}>Full List</li>
      </ul>
    </nav>
  )
}

export default Navbar
