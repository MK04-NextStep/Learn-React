import React, { createContext, useReducer, useEffect } from "react";

const TodoList = createContext();

export default TodoList

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
                    date: action.date? action.date :new Date().toISOString().split('T')[0]
                }
            ]
        case "clear":
            return []
            
        default:
            return task;
    }
}

let todayDate = () => {
        let date = new Date();
        return date.toISOString().split('T')[0]
    }

function TodoListProvider({ children }) {
    
    let [todoRe, setTodoRe] = useReducer(reducer,
        JSON.parse(localStorage.getItem("tasks"))||[])

    function addAction(type, id = 0, value = "", date="") {
        setTodoRe({ type, id, value, date })
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(todoRe))
    }, [todoRe])

    function clearList() {
        localStorage.setItem("tasks",JSON.stringify([]))
        addAction("clear")
    }

    return (
        <TodoList.Provider value={{ todoRe, addAction, clearList }}>
            {children}
        </TodoList.Provider>
    )
}

export { TodoListProvider }