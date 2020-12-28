import React, {useState} from 'react'

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

    return (
        <div className="Form">
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
                    <div key={idx}>{item.text}</div>
                ))}
            </div>
        </div>
    )
}

export default Form