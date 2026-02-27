import { MdEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { useState } from "react"
import './Task.css'
function Task({ data, addAction }) {
    let [valueSet, setValue] = useState(data.title);
    let [isUpdate, setIsUpdate] = useState(false);

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
                            addAction("update", data.id, valueSet)
                            setIsUpdate(false);
                        }}>change</button>
                    </div> :
                    <div className="add" style={{
                        backgroundColor: isExpired(data.date) ? "rgb(184, 57, 57)" : " #391842"
                    }}>
                        <h3>{data.title}</h3>
                        {
                            data.completed == true ?
                                <button style={{
                                    backgroundColor: isExpired(data.date) ? "rgb(184, 57, 57)" : " #391842"
                                }} onClick={() => addAction("remove", data.id)}><MdDeleteForever style={{
                                    backgroundColor: isExpired(data.date) ? "rgb(184, 57, 57)" : " #391842"
                                }}/></button> :
                                <div className="button">
                                    <p>{data.date}</p>
                                    <button style={{
           
                                        backgroundColor: isExpired(data.date) ? "rgb(184, 57, 57)" : " #391842"
                                    }} onClick={() => addAction("isDone", data.id)}><MdOutlineDoneAll style={{
                                        backgroundColor: isExpired(data.date) ? "rgb(184, 57, 57)" : " #391842"
                                    }}/></button>
                                    <button style={{
                                        backgroundColor: isExpired(data.date) ? "rgb(184, 57, 57)" : " #391842"
                                    }} onClick={
                                        () => {
                                            setIsUpdate(true);
                                        }
                                    }><MdEditNote style={{
                                        backgroundColor: isExpired(data.date) ? "rgb(184, 57, 57)" : " #391842"
                                    }}/></button>
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Task
