import { useState, useEffect, useReducer } from "react"
import Task from "./Task";
import Navbar from "./Navbar";
import './Todo.css'
function ToDo() {
    let [todo, setTodo] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });
    let [isFilter, setIsFilter] = useState(false);
    let [filterTodo, setFilter] = useState(todoRe); 
    let [task, setTask] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todo));
    }, [todo]);

    function AddTask() {
        let newTask = {
            id: Date.now(),
            title: task,
            completed: false
        }
        setTodo(prev => [...prev, newTask])
        setTask("")
    }

    function removeTask(id) {
        let newStorage = [];
        todo.map((item) => {
            if (item.id != id) {
                return newStorage.push(item)
            }
        })

        setTodo(newStorage)
    }

    function isDone(id) {
        let newStorage = todo.map(item =>
            item.id === id
                ? { ...item, completed: true }
                : item
        );
        setTodo(newStorage)
    }

    function updateTask(id, value) {
        let newStorage = todo.map(item =>
            item.id === id
                ? { ...item, title: value }
                : item
        );
        setTodo(newStorage)
    }

    function clearList() {
        localStorage.removeItem("tasks")
        setTodo(null)
    }

    function completedTask() {
        let newStorage = [];
        let todoList = JSON.parse(localStorage.getItem("tasks"))
        todoList.map((item) => {
            if (item.completed == true) {
                newStorage.push(item);
            }
        })
        setFilter(newStorage);
        setIsFilter(true)
    }

    function notCompleted() {
        let newStorage = [];
        let todoList = JSON.parse(localStorage.getItem("tasks"))
        todoList.map((item) => {
            if (item.completed == false) {
                newStorage.push(item);
            }
        })

        setFilter(newStorage);
        setIsFilter(true)
    }

    function fullList() {
        setIsFilter(false)
    }
    return (
        <section className="to-do">
            <Navbar clearList={clearList}
                completedTask={completedTask}
                notCompleted={notCompleted}
                fullList={fullList} />

            <div className="search">
                <input type="text" value={task}
                    onChange={(e) => setTask(e.target.value)} placeholder="Enter your task..." />
                <button onClick={AddTask}>Add</button>
            </div>
            <div className="todo-list">
                {
                    isFilter?
                    filterTodo.map((data) => (
                        <Task key={data.id} data={data}
                                removeTask={removeTask}
                                isDone={isDone}
                                updateTask={updateTask} />
                    ))
                        :todo.map((data) => (
                            <Task key={data.id} data={data}
                                removeTask={removeTask}
                                isDone={isDone}
                                updateTask={updateTask} />
                        ))
                }
            </div>
        </section>
    )
}

export default ToDo
