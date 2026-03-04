import { MdEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { useContext, useState } from "react"
import './Task.css'
import TodoList from "./ToDoList";

function Task({ data}) {
    let [valueSet, setValue] = useState(data.title);
    let [isUpdate, setIsUpdate] = useState(false);
    let todoVal = useContext(TodoList);

    function isExpired(taskDate) {
        let today = new Date();
        let expiry = new Date(taskDate);
        today.setHours(0, 0, 0, 0);
        return expiry < today;
    }

    return (
        <div className="main-task">
            {
                isUpdate ?
                    <div className="updated">
                        <input type="text" value={valueSet}
                            onChange={(e) => setValue(e.target.value)} />
                        <button onClick={() => {
                            todoVal.addAction("update", data.id, valueSet)
                            setIsUpdate(false);
                        }}>change</button>
                    </div> :
                    <div className={
                        isExpired(data.date) ? "add-expire":
                        data.completed == true ? "completed": "add"}>
                        <h3>{data.title}</h3>
                        {
                            data.completed == true ?
                                <button onClick={() => todoVal.addAction("remove", data.id)}>
                                    <MdDeleteForever/></button> :
                                <div className="button">
                                    <p>{data.date}</p>
                                    <button onClick={() => todoVal.addAction("isDone", data.id)}>
                                        <MdOutlineDoneAll /></button>
                                    <button onClick={() => setIsUpdate(true)}><MdEditNote /></button>
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Task
