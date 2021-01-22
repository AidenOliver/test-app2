import React, {useState, useEffect} from 'react'
import Input from './Input'
import Data from './Data'

const SearchObjects = () => {
    const [data] = useState([
        {
            name: "aiden",
            age: 21,
            job: "software developer"
        },
        {
            name: "hydro",
            age: 22,
            job: "streamer"
        }
    ])

    // useEffect(() => {
    //     const newData = data.filter(item => item.name.includes(value))
    //     setSearchResults(newData)
    // }, [])

    // string state
    const [value, setValue] = useState("")
    // search array
    const [searchResults, setSearchResults] = useState([])

    const handleChange = (e) => {
        // update string with event(input)
        setValue(e)
        //map objects array and return key-values based on index
        let oldData = data.map(item => {
            return {name: item.name, age: item.age, job: item.job}
        })
        // if string is not empty, execute
        if (value !== "") {
            let newData = []
            // filter through old array, make sure each index includes a string value via user input
            newData = oldData.filter(item => item.name.includes(value) || item.job.includes(value))
            setSearchResults(newData)
        } else {
            // if string is empty, update search array with data array
            setSearchResults(data)
        }
    }

    return (
        <div className="Search2">
            Search by object key
            <Input value={value} handleChange={e => handleChange(e.target.value)}/>
            <Data data={value.length < 1 ? data : searchResults}/>
        </div>
    )
}

export default SearchObjects