import React from 'react'

const Input = ({value, handleChange}) => {
    return (
        <div className="Input">
            <input value={value} onChange={handleChange} />
        </div>
    )
}

export default Input