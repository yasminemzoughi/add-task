import React from 'react'


const ListItems = ({list}) => {
  return (
    <div >
      <h2>List Items</h2>
      {list.map((item , i)=>(
        <ul>
          <li>
            {item}
            <button>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default ListItems
