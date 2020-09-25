import React,{useState} from 'react';
import './item.css'

const intialState = [
  {name:"tomatoes",calories:20},
  {name:"mango",calories:120},
  {name:"candy",calories:200},


]
function Item(props) {
    const {name,calories} = props.item
    const {editable} = props

  const [list,setList] = useState([{name:"tomatoes",calories:20}]);
  return (
    <div className="item-style">
    {editable  ? <input  onKeyPress = {(e)=>{
        props.onKeyPress(e,props.index)
    }} type = "text" defaultValue = {name}/> :<h3 name = {name} onDoubleClick = {props.onDoubleClick}>{name}</h3> }


        <h3>Calorie : { calories}</h3>
        <button name = {name} style = {{marginTop:"30px",marginBottom:"30px"}} onClick = {props.onClick}>Remove</button>
    </div>
  );
}

export default Item;