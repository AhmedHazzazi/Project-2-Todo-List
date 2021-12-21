import React, { useEffect, useState } from 'react'
import './App.css';

import axios from "axios";
import Todo from "./components/Todo";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    // should bring data using axios
    // from backend (GET / tasks)
    axios
    .get(`http://localhost:5000`)
    .then((response) => {
      // console.log('RESPONSE: ', response);
      console.log("DATA: ", response.data);
      setTasks(response.data);
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
  };
  const mapOverTasks = tasks.map((taskObj, i) => {
    return <Todo key={i} task={taskObj} />
  });
  
  return (
    <div className='app'>
      <p>app</p>
      {/* when click on this button 
      should call function bring Data */}
      <button onClick={getData}>GET TASKS</button>
      {mapOverTasks}
    </div>
  );
}