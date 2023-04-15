import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Display = () => {


    const dispatch = useDispatch()
    const  data = useSelector((storedata)=>{
        return storedata
    })
    console.log(data);
    
  return (
    <div>
        <h2>{data}</h2>
        <button onClick={(()=>{
            dispatch({
                type: "increment"
            })




        })}>increment</button>
        <button  onClick={(()=>{
            dispatch({
                type: "decrement"
            })
        })}>decrement</button>
        <button  onClick={(()=>{
            dispatch({
                type: "reset"
            })
        })}>reset</button>
    </div>
  )
}

export default Display