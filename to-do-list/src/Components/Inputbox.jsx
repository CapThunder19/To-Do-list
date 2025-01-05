import React, { useState } from 'react'
import './Inputbox.css'


const Inputbox = (props) => {
  const [intext, Setintext] = useState('')
  return (
    <div>
        <input type="text" placeholder='Enter Task' id='ser' value={intext} onChange={e => {
          Setintext(e.target.value)
        }}/>
        <button id='but'
        onClick={()=>{
          props.addlist(intext)
          Setintext('')
        }}
        
        >ADD</button>
        
    </div>
  )
}

export default Inputbox
