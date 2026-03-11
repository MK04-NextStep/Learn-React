import data from './data'
import Card from './Card'
import './Home.css'
import { useState } from 'react';
function Home() {
    let [change, setChange] = useState(false);
    let [openId, setOpenId] = useState([]);

    let changeState = change === false ?
    (id) => {
        if(openId[0] === id){
            setOpenId([])
        }else{
            setOpenId([id])
        }
    }:
    (id) => {
        if(openId.includes(id)){
            setOpenId(openId.filter((item) => item != id))
        }else{
            setOpenId(prev => [...prev, id])
        }
    }
    function changeOptions(){
        setChange(!change);
        setOpenId([])
    }
    return (
        <div className='body'>
            <button 
            className={change ? "buttonClicked" : "buttonNotClicked"}
            onClick={() => changeOptions()} >Multiple Options</button>
            {data.map((item) => (
                <Card key={item.id} item={item} 
                isOpen={openId.includes(item.id)}
                changeState={changeState}/>
            ))}
        </div>
    )
}
export default Home
