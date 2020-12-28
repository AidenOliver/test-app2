import React, {useContext} from 'react'
import {Context} from '../contexts/Context'

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
          <p>{item.job}</p>
        </div>
      ))}
    </div>
  );
}

export default Nav;