import "./Card.css"

function Card({ item, isOpen, changeState }) {

    return (
        <div className="card-body">
            <div className="question">
                <p>{item.que}</p>
                <button 
                className="stateButton"
                onClick={() => changeState(item.id)}>+</button>
            </div>
            {
                isOpen && <div className="answer" >
                    <p>{item.ans}</p>
                </div>
            }
        </div>
    )

}

export default Card