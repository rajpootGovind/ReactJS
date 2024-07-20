import React from "react"

const Date = (props) => {
    let day =props.day ;
    let month = props.month ;
    let year = props.year;
    return (
       <div>
         <span>{day} </span>
        <span>{month} </span>
        <span>{year}</span>
       </div>
    )
}

export default Date;