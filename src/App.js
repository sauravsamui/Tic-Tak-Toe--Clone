import React, { useState } from 'react'
import './App.css';
import InputFunction from './components/InputFunction';
import styles from "./components/input.module.css"

function App() {
  const [result,setResult] = useState("")
  const [winner, setWinner] = useState("");
  let inputCount=[0,1,2,3,4,5,6,7,8]
  let updateResult =(value)=>{
    setResult(value)
    setWinner(value);
  }
 
  return (
    <div className="App">
      <h1 className={styles.head}>TIC TAC TOE</h1>
       <h3 className={styles.subhead}><span>Player1 is X</span> <span> Player2 is O</span></h3>
     
       { winner==""?<div  className='grid'>
         {inputCount.map((el,index)=>(
            <InputFunction key={index} index={index} inputCount={el} updateResult={updateResult}/>
        ))}</div>:<h2 className={styles.result}>{winner}</h2>
      }
      
      <button className={styles.button}
      onClick={()=>{
        window.location.reload()
      }}
      >Play Again!</button>
    </div>
  );
}

export default App;
