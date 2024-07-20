import React from "react";
import "./inner.css"
import Date from "./Date"
import { useState } from "react";

function Inner(props) {
  
    const [name, nameChange] = useState(props.name)

    const clickHandler =()=>{
      nameChange("change Mamu")
      console.log("button clicked")
     
    }
  return (
<div>
     <div className="inner">
      <Date/>
    
    
     <div className="innerTitle">
     <h2>{name}</h2>
     </div>
       <button id="button"  onClick={clickHandler}>Add to Cart</button>
       </div>
       
</div>
    

  
  )
}

export default Inner