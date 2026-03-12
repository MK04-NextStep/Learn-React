import { useState } from "react";
import './App.css'
function MenuBundle({ total, message, title }) {

    const [level, setLevel] = useState(0);

    function handleClick(i) {
        if (level === i) {
            setLevel(i - 1);
        } else {
            setLevel(i);
        }
    }

    return (
        <div className="bundle">
            {
                Array.from({ length: total }, (_, i) => {
                    const current = i + 1;
                    if (current > level + 1) return null;
                    return (
                        <button
                            key={current}
                            className={`level-${current}`}
                            onClick={() => handleClick(current)}
                        >
                            {title} {current}
                        </button>
                    );
                })
            }
            {level === total && <h2>{message}</h2>}
        </div>
    );
}

export default MenuBundle;