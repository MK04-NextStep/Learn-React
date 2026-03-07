import { createContext, useEffect, useReducer, useState } from "react";
let dataList = createContext();

export default dataList;

function reducer(data, action) {
    switch (action.type) {
        case "add":
            return [...data, {
                id: Date.now(),
                name: action.user.name,
                username: action.user.username,
                password: action.user.pass
            }]
        case "delete":
            return data.filter((item) => (
                item.username !== action.user.username
            ))
        default:
            return data
    }
}


function DataListProvider({ children }) {

    let [data, setData] = useReducer(reducer, JSON.parse(localStorage.getItem("data")) || []);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data])
    function actionDB(type, user) {
        setData({ type, user });
    }

    return (
        <dataList.Provider value={{ data, actionDB}}>
            {children}
        </dataList.Provider>
    )
}

export { DataListProvider }
