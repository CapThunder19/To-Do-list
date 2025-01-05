import React from 'react'
import './Done.css'

const Done = (props) => {
  return (
    <div className='doneitem'>
        <span>{props.item}</span>
        <i class="fa-solid fa-xmark cross" onClick={e => {
         props.moveitemto(props.item)
        }}></i>
        </div>
  )
}

export default Done