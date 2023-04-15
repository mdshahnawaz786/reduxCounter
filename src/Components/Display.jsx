import React, { useState } from 'react'

const Display = () => {

    const [state, setstate] = useState(0)
    
    
  return (
    <div>
        <h2>{state}</h2>
        <button onClick={(()=>{
            setstate(state + 1)
        })}>increment</button>
        <button  onClick={(()=>{
            setstate(state - 1)
        })}>decrement</button>
        <button  onClick={(()=>{
            setstate( 0)
        })}>reset</button>
    </div>
  )
}

export default Display