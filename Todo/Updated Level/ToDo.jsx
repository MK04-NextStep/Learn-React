import { useState, useEffect, useReducer, useContext } from "react"
import Task from "./Task";
import Navbar from "./Navbar";
import './Todo.css'
function ToDo() {
    let todayDate = () => {
        let date = new Date();
        return date.toISOString().split('T')[0]
    }
    let [task, setTask] = useState("");
    let [dateTask, setDateTask] = useState("")

    let reducer = (task, action) => {
        switch (action.type) {
            case "remove":
                return (
                    task.filter((item) => {
                        return item.id !== action.id
                    })
                )
            case "update":
                return (
                    task.map((item) => {
                        return item.id === action.id ?
                            { ...item, title: action.value } : item
                    })
                )
            case "isDone":
                return (
                    task.map((item) => {
                        return item.id === action.id ?
                            { ...item, completed: true } : item
                    })
                )
            case "add":
                return [
                    ...task, {
                        id: Date.now(),
                        title: action.value,
                        completed: false,
                        date: action.date
                    }
                ]
            default:
                return []
        }
    }

    let [todoRe, setTodoRe] = useReducer(reducer,
        JSON.parse(localStorage.getItem("tasks"), [])
    )

    function addAction(type, id = 0, value = "", date=todayDate) {
        setTodoRe({ type, id, value,date })
    }
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todoRe))
    }, [todoRe])

    let [filterTodo, setFilter] = useState(todoRe);
    let [isFilter, setIsFilter] = useState(false);


    function clearList() {
        localStorage.setItem("tasks",JSON.stringify([]))
        setTodoRe("clear")
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

    function searchTask(valueSet){
        let newStorage = [];
        let todoList = JSON.parse(localStorage.getItem("tasks"))
        todoList.map((item) => {
            if (item.title == valueSet) {
                newStorage.push(item);
            }
        })

        setFilter(newStorage);
        setIsFilter(true)
    }

    return (
        <section className="to-do">
            <Navbar completedTask={completedTask}
            notCompleted={notCompleted}
            fullList={fullList} 
            clearList={clearList}
            searchTask={searchTask}/>

            <div className="search">
                <input type="text" value={task}
                    onChange={(e) => setTask(e.target.value)} placeholder="Enter your task..." />
                <input type="date" value={dateTask} onChange={(e) => setDateTask(e.target.value)} />
                <button onClick={() => {
                    addAction("add", 0, task,dateTask)
                    setTask("")
                    setDateTask("")
                }}>Add</button>
            </div>
            <div className="todo-list">
                {
                    isFilter ?
                        filterTodo.map((data) => (
                            <Task key={data.id} data={data}
                                addAction={addAction} />
                        ))
                        : todoRe.map((data) => (
                            <Task key={data.id} data={data}
                                addAction={addAction}
                            />
                        ))
                }
            </div>
        </section>
    )
}

export default ToDo
