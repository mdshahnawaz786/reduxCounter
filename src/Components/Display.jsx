import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((storedata) => {
    return storedata;
  });
  console.log(data);

  return (
   <div  style={{height:"250px", width:"350px",boxShadow:"0 0 10px black", display:"flex",justifyContent:"center",alignItems:"center",margin:"100px auto"}}>
     <div>
        <h2>Counter App</h2>
      <h2>{data}</h2>
      <div style={{display:"flex",gap:"20px"}}>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}
      >
        Reset
      </button>
      </div>
    </div>
   </div>
  );
};

export default Display;
