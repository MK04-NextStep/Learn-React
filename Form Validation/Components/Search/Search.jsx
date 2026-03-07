import { useState } from 'react';
import './Search.css'

function Search({ setFilter }) {

    let field = ["groceries", "furniture", "fragrances", "beauty", "all"];
    let ratings = [1, 2, 3, 4, 5]
    let [range, setRange] = useState(0);
    let [selected, setSelected] = useState("all");
    let [rating, setRating] = useState(0);

    function handleChange(e) {
        const { value, checked } = e.target;
        if (checked) {
            setSelected(value);
        }
    }

    function clickSubmit(e) {
        setFilter({
            category: selected,
            range: range,
            rating: rating,
        })
    }

    return (
        <div className='filter'>
            <form >
                <div className="box">
                    <label htmlFor="category">Category</label>
                    <ul className='box-inside'>
                        {
                            field.map((item) => (
                                <li key={item}>

                                    <input type="radio" value={item}
                                        onChange={(e) => handleChange(e)} name='category' />
                                    <label>{item} Products</label>
                                </li>

                            ))
                        }
                    </ul>
                </div>
                <div className="box">
                    <label htmlFor="price">Price Range(0-3000): </label>
                    <input type="range" id='price' name='price' value={range}
                        min="0" max="3000" onChange={(e) => setRange(e.target.value)} />
                    <p>Range: {range}</p>
                </div>
                <div className="box">
                    <label htmlFor="rating">Rating (1-5):</label>
                    <ul className='box-inside'>
                        {
                            ratings.map((item) => {
                                return <li key={item}>
                                    <input type="radio" value={item} id={item} name='rate' onChange={() => setRating(item)} />
                                    <label htmlFor={item}>{item}</label>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <button type='button' onClick={(e) => clickSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default Search
