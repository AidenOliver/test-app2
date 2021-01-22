import React from 'react'

const Data = ({data}) => {
    return (
        <div className="Data">
            {data.map((item, idx) => (
                <div key={idx}>
                    <p>{item.name}, {item.age}, {item.job}</p>
                </div>
            ))}
        </div>
    )
}

export default Data