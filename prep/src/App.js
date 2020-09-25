//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 09/06/2020
//Description: Main App.js Container file
//Purpose of project is to master react Hook fundamentals and interview prep


import React from 'react';
import './App.css';
import NameTag from './components/nameTag'

//style js object
const nameStyle = {color:"white",
border:"1px solid grey",
paddingTop:"5px",
paddingBottom:"5px",
width:"300px"
}

const nameTitle = {
  color:"yellow",
  borderStyle :"dotted",
  color:"yellow",
  width:"350px"
}
//Captilize components to distinguish as react components

const App = ()=> {
  return (
   <div className = "App">
   <header className="App-header">
      <h1 style = {{...nameStyle,...nameTitle}}>Names List</h1>
      <NameTag firstName = "Hari" lastName = "YOLO"/>
      <NameTag firstName = " Boo" lastName = "MOO"/>
      <NameTag firstName = "Meeka" lastName = "kungPao" />

   </header>
   </div>
  );
}

export default App;
