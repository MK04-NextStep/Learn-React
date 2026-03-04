import React, { useContext, useState } from 'react'
import TodoList from './ToDoList'
import Task from './Task';
import './Todo.css'
import Navbar from './Navbar';

function Todo() {
    let [task, setTask] = useState("");
    let [dateTask, setDateTask] = useState("")

    let value = useContext(TodoList);

    let [filterType, setFilterType] = useState("all");

    let filterData = 
        filterType === "completed"?
        value.todoRe.filter((item) => item.completed):
        filterType === "notCompleted" ?
        value.todoRe.filter((item) => !item.completed):
        value.todoRe

    return (
    < section className="to-do" >
        <Navbar setFilterType={setFilterType}/>

        <div className="search">
            <input type="text" value={task}
                onChange={(e) => setTask(e.target.value)} placeholder="Enter your task..." />
            <input type="date" value={dateTask} onChange={(e) => setDateTask(e.target.value)} />
            <button  onClick={() => {
                value.addAction("add", 0, task, dateTask)
                setTask("")
                setDateTask("")
            }}>Add</button>
        </div>
        <div className='todo-list'>
            {
                
                filterData.map((data) => (
                        <Task key={data.id} data={data}/>
                    ))
            }
        </div>
    </section >

    )
}

export default Todo
