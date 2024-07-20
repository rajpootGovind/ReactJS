import React from 'react'
import "./form.css"
import { useState } from 'react'

function Form() {
    const[name, setName]=useState('')
    const[date, setDate]=useState('')

    const nameChangeHandler=(event)=>{
        setName(event.target.value)
     console.log(event.target.value)
    }
    const dateChangeHandler=(event)=>{
        setDate(event.target.value)
     console.log(event.target.value)
     console.log("printing");
     console.log(name);
     console.log(date);
    }
    

    const submitHandler =(event)=>{
       event. preventDefault();
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='newProductName' onChange={nameChangeHandler}>
            <lable>Name </lable>
            <input type="text"></input>
        </div>
        <div className='newProductDate' onChange={dateChangeHandler}>
            <lable>Date </lable>
            <input type="date" min="2023-01-01" max='2029-01-01'></input>
        </div>
        <div className='newProductButton'>
            <button type="submit">Add product</button>
        </div>
    </form>
  )
}

export default Form;