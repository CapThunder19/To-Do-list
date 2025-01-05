import React from 'react'
import './List.css'

const List = (props) => {
  return (
    <div>
        <li className="lisitem">
            {props.item}
            <span className='aa'>
            <i className="fa-solid fa-square-minus icon" onClick={e=>{
                props.deleteitem(props.index)
            }}></i>
            <i class="fa-solid fa-check tick" onClick={e=>{
                props.moveitem(props.item)
            }}></i>
            </span>
        </li>
    </div>
  )
}

export default List