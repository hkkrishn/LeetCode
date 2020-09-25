import React,{useState} from 'react';
import './App.css';
import Item from './components/item'
import {useList} from './hooks/useList'

const intialState = [
  {name:"tomatoes",calories:20},
  {name:"mango",calories:120},
  {name:"candy",calories:200},


]
function App() {

  const items = useList(intialState);
  const [editable,setEditable] = useState(false)
  const [name,setName] = useState("");
  const [income,setIncome] = useState("");

  // const removeUnhealthy = (e)=>{
  //   let healthy = list.filter((item,index)=>{
  //     if(item.calories < 150){
  //       return item
  //     }
  //   })
  //   console.log(healthy)
  //   setList(healthy)
  // }

  const removeItem = (e)=>{
    items.removeItem(e.target.name)
  }
  const makeEditable = (e)=>{
    console.log(e.target.value)
    setEditable(true)

  }

  const handleKeyPress = (e,index)=>{
    if(e.key === "Enter"){
      console.log('enter pressed')
      setEditable(!editable)
      items.saveItem(index,e.target.value)

    }
  }

 const handleNameChange = (e)=>{
      setName(e.target.value)
      console.log(name)
  }
  return (
    <div  className="App">
    <header className = "App-header">
    <h2>Grocery List</h2>
    {items.list.map((item,index)=>{
      return(
        <Item
          editable = {editable}
          onDoubleClick = {makeEditable}
          item = {item}
          key = {`${item.name}${index}`}
          onClick = {removeItem}
          onKeyPress = {handleKeyPress}
          index = {index}
          />
      )
    })}
    <form>
      <span>Name:</span>
      <input defaultValue = {name} type = "text" onChange = {handleNameChange}/>
      <select>
          <option value = "high">High</option>
          <option value = "mid">Mid</option>
          <option value = "high">Low</option>
      </select>
      <input type="submit" value = "submit"/>
    </form>

    </header>

    </div>
  );
}

export default App;
