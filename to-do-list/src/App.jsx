import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputbox from './Components/Inputbox'
import List from './Components/List'
import Done from './Components/Done'

function App() {

  const [intlist, Setintlist] = useState([]);
  const [donelist, Setdonelist] = useState([]);
  let addlist = (inttext) => {
    if(inttext!== '')
    {
    Setintlist([...intlist,inttext])
  }}

  const deletelist = (key) =>{
    let newlist = [...intlist]
    newlist.splice(key,1)
    Setintlist([...newlist])
  }

  const moveItem = (item) => {
    
    Setintlist(intlist.filter((el) => el !== item)); 
    Setdonelist([...donelist, item]); 
  };

  const moveItemto = (item) => {
    Setdonelist(donelist.filter((el) => el !== item));
    Setintlist([...intlist, item])};
  

  return (
    <div className='maindiv'>
      
      <div className="searchdiv">
      <Inputbox addlist = {addlist}/>
      </div>
      <div className="listdiv">
        <h1>ToDo</h1>
        <hr />
        {intlist.map((listitem, i)=>{
          return(
            <List key={i} index = {i} item={listitem} deleteitem = {deletelist} moveitem={moveItem}/>
          )
        })}
      </div>
      <div className="donediv">
      <h1>Done</h1>
      <hr />
      {donelist.map((listitem, i)=>{
          return(
            <Done key={i} index = {i} item={listitem} moveitemto={moveItemto} />
          )
        })}
      </div>
    </div>
  )
}

export default App
