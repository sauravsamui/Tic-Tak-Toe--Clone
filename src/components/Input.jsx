import React from 'react'

const Input = ({inputCount,index,setValue,ide,input}) => {
  return (

    <div id={index}   className={"input"+index} type="text" style={{pointerEvents:inputCount==ide?"none":"auto",
    color:input=="O"?"white":"grey"}}
    onClick={(e)=>{
      console.log(e.target)
      setValue(e.target.id)
     
     
    }}>{inputCount==ide?input:""}</div>
   
  
    
  )
}

export default Input