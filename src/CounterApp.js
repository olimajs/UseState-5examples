import React,  { useState } from 'react'


const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter+1);
    setCounter(prevCounter => prevCounter+1);//se ejecuta de 2 en 2.
  }

    return (
    <div>
        <button onClick={incrementCounter}> 
            Increment
        </button>
         <h1>Clicks: {counter}</h1>
    </div>
  )
}

export default CounterApp