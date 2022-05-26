import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [input, setInput] = useState(0)
  const [Watch, setWatch] = useState();
  const [final, setFinal] = useState()  
  const [timerId, setTimerId] = useState();
  if(Watch===final){
      clearInterval(timerId)
    }
  const start = ()=>{
    setWatch(input)
    
    
    if(!timerId){
      let id = setInterval(()=>{
        setWatch((prev)=>prev+1)
      },1000);
      setTimerId(id);
    };
    }
   const handleInput = (e)=>{
    setInput(Number(e.target.value));
    //console.log(input)
   } 
   const handleFinal = (e)=>{
    setFinal(Number(e.target.value));
    console.log(final)
   }
  const pause = ()=>{
    clearInterval(timerId)
  }
  const reset = ()=>{
    clearInterval(timerId);
    setWatch(0);
  }
  return (
      <>
    <div><h1>Timer</h1> </div>
    <div><h2>{Watch}</h2></div>
    <button onClick={start}>Start</button>
    <button onClick={pause}>pause</button>
    <button onClick={reset}>Reset</button>
    <br />
    <input type="number"
     placeholder='start Point'
     onChange={handleInput}
     />
     <input type="number" 
     onChange={handleFinal}
     placeholder='End Point'
     />
    </>
  )
}

export default Timer