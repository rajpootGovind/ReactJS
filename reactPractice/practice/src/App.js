import logo from './logo.svg';
import './App.css';
import Room from "./components/Room"
import Library from "./components/Library"
import Date from "./components/Date"
import Props from './components/Props';

function App() {
  //3rd way of passing the data in the react component by the use of objects array.
  const date =[
    {
      day:"01",
      month:"Feb",
      year: 2024
    },
    {
      day:23,
      month:"Sept",
      year: 2023
    },{}
  ]

  //second way of passing data by the use props .
  let place2 ="Chandigrah";

  return (
   <div className="App">
   <h1>Hello World !</h1>

    <Room owner={"Govind Rajpoot"} place={"Kanpur"}/>
    <Date day={date[0].day} month={date[0].month} year={date[0].year}/>

    <Room owner={"Govind Rajpoot & Abhay Gupta"} place={place2}/>
    <Date day={date[1].day} month={date[1].month} year={date[1].year}/>

    <Library/>
    <Library/>
    <Library/>

    <Props>It is done</Props>
   </div>
  );
}

export default App;
