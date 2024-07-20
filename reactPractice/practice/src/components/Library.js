import React from 'react'
import Date from "./Date"

const Library = () => {
  return (
    <div>
    <br/>
        <div >My Library <u>is 5:00 to 10:00</u></div>
        <Date day={"01"} month= {"Sept"} year={"2023"} />
        <div>To </div>
        <Date day={"09"} month= {"July"} year={"2024"} />
    </div>
  )
}

export default Library