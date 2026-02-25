import { MdEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { useState } from "react"
import './Task.css'
function Task({ data, removeTask,isDone,updateTask  }) {
    let [valueSet, setValue] = useState(data.title);
    let [isUpdate, setIsUpdate] = useState(false)
    return (
        <div className="main-task">
            {
                isUpdate ?
                    <div className="updated">
                        <input type="text" value={valueSet}
                            onChange={(e) => setValue(e.target.value)} />
                        <button onClick={() => {
                            updateTask(data.id, valueSet)
                            setIsUpdate(false);
                        }}>change</button>
                    </div> :
                    <div className="add">
                        <h3>{data.title}</h3>
                        {
                            data.completed == true ?
                                <button onClick={() => removeTask(data.id)}><MdDeleteForever /></button> :
                                <div className="button">
                                    <button onClick={() => isDone(data.id)}><MdOutlineDoneAll /></button>
                                    <button onClick={
                                        () => {
                                            setIsUpdate(true);
                                        }
                                    }><MdEditNote /></button>
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Task
