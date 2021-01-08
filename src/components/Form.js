import React, {useState} from 'react'
// import {Button} from '@material-ui/core'

const Form = () => {
    // input value state
    const [value, setValue] = useState("")
    // items array state will display input value
    const [items, setItems] = useState([])

    // pass in event param
    const handleSubmit = (e) => {
        // prevent page from refreshing on default submission
        e.preventDefault()
        // call addItem function and pass in value string to update items
        addItems(value)
        // set value to empty string
        setValue("")
    }

    const addItems = (text) => {
        // display entire contents of array, then input (values)
        const newItems = [...items, {text}]
        // set array with updated inputs (values)
        setItems(newItems)
    }

    const removeItems = (index) => {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    return (
        <div className="Form">
            <div>{items.length}</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>

            <div className="items">
                {items.map((item, idx) => (
                    <div key={idx}>
                        {item.text}
                        {/* initiliaze remove function inside onClick with arrow function, pass in idx to removeItems*/}
                        <button onClick={() => removeItems(idx)}>remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form