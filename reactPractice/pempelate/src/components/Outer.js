import React from "react"
import Inner from "./Inner"
import "./outer.css"
const Outer =() => {
  let title =[
    {
      name:"Nirma"
    },
    {
      name:"Ghadi"
    },
    {
      name:"Surf Exel"
    },
    {
      name:"Rin"
    },
  ]

  // title[0].name ="Change"
    
    return(
        <div className="outer">
          <Inner name={title[0].name}/>
          <Inner name={title[1].name}/>
          <Inner name={title[2].name}/>
          <Inner name={title[3].name}/>
        </div>
    )
}

export default Outer;