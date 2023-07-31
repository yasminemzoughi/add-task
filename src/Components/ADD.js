import React, { useState } from 'react';
import './ADDS.css'
const ADD = ({addItem}) => {
  const [item, setItem] = useState('')

  const handleChange = (event)=>{
    setItem(event.target.value);
  };

  return (
    <div className='one'>
     <h2>Add Item</h2> 
     <input onChange={handleChange}  value ={item} placeholder='Add to do...'></input>
     <button onClick={(e)=>{e.preventDefault();
       addItem(item);
        setItem("");
      } }>Add</button>
    </div>
  );
};

export default ADD
