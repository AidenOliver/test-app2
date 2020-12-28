import React, {useState, useEffect} from 'react'

const Test = () => {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(1)

    useEffect(() => {
        setCountTwo(countTwo + 1)
    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className="Test">
            <p>{count}</p>
            <p>{countTwo}</p>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}

export default Test