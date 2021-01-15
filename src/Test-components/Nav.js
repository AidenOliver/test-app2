import React, {useContext} from 'react'
import {Context} from '../Test-context/Context'

const Nav = () => {
  const [items, setItems] = useContext(Context)

  return (
    <div className="Nav">
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.age}</p>
          <p>{item.hobbies}</p>
          <p>{item.title}</p>
          <p>{item.jobType}</p>
          <p>{item.games}</p>
          <p>{item.religious}</p>
        </div>
      ))}
    </div>
  );
}

export default Nav;