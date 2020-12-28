import React, {useState, createContext} from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {
    const [items, setItems] = useState([{
        name: "Aiden",
        age: 21,
        hobbies: "coding, hacking, video games",
        title: "Software Developer",
        job: "Freelance"
    }])

  return (
    <Context.Provider value={[items, setItems]}>
        {props.children}
    </Context.Provider>
  );
}



