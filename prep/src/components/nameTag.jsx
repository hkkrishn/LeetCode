import React from 'react'

const nameStyle = {color:"white",
border:"1px solid grey",
paddingTop:"5px",
paddingBottom:"5px",
width:"300px"
}

//best practice to is to have a named function for testing purposes
const nameTag=(props)=> {

  const {firstName,lastName} = props.children;
  return (
    <>
    <h3 className = "name" style = {{nameStyle}}>{firstName}</h3>
    <h3 className = "name" style = {{nameStyle}}>{lastName}</h3>
    </>
  )
}

export default nameTag
