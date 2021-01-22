import React, {useEffect, useState} from 'react'

const Search = () => {
    // const [items, setItems] = useContext(Context)

    // data
    const moreItems = [
        "first",
        "second",
        "third"
    ]
    // input state
    const [search, setSearch] = useState("")
    // search results state
    const [results, setResults] = useState([])
    // use setter function to detect changes in string value/input
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    //re-render when search string updates/changes
    useEffect(() => {
        // filter data through input based on search value/string
        const searchResults = moreItems.filter(item => 
            item.includes(search)
        )
        setResults(searchResults)
    }, [search])
    
    return (
            <div className="Search">
                Search by String
                <input 
                    type="text"
                    value={search}
                    // pass in change function to onChange handler
                    onChange={handleChange}
                />
                <div>
                    {results.map((searches, idx) => (
                        <div key={idx}>{searches}</div>
                    ))}
                </div>
            </div>
    )
}

export default Search