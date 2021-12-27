import React, { useState, useEffect } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Todo from "./components/Todo";
import Add from "./components/Add";
import Register from "./components/Register";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    // should bring data using axios
    // from backend (GET / tasks)
    axios
    .get(`http://localhost:5000/tasks`)
    .then((response) => {
      // console.log('RESPONSE: ', response);
      console.log("DATA: ", response.data);
      setTasks(response.data);
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
  };

  const postNewTodo = (body) => {
    // console.log("func postNewTodo from APP");
    // {"title":"task 5","isCompleted": false}
    axios
    .post(`http://localhost:5000/tasks`,body)
    .then((response) => {
      // console.log('RESPONSE: ', response);
      console.log("DATA: ", response.data);
      // setTasks(response.data);
      getData()
      // change react hooks state using spread operator
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
  };

  const deleteTodo = (id) => {
    axios
    .delete(`http://localhost:5000/tasks/${id}`)
    //     (`http://localhost:5000/tasks/${id}`)
    .then((response) => {
      // console.log('RESPONSE: ', response);
      console.log("DATA: ", response.data);
      getData()
      // change react hooks state using spread operator
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
  };

  const toggleTodo = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/tasks/${id}/${newStatus}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  
  const deleteTasks = () => {
    axios
      .delete(`http://localhost:5000/tasks`)
      //     (`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const filterData = (status) => {
    // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:5000/filter?isCompleted=${status}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  // const mapOverTasks = tasks.map((taskObj, i) => {
  //   return <Todo key={i} task={taskObj} />
  // });

  // const mapOverTasks = tasks.map((taskObj, i) => (
  //   <Todo key={i} task={taskObj} deleteTodo={deleteTodo}/>
  // ));
  
  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo
      key={taskObj._id}
      task={taskObj}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  ));
  
  return (
    // <div className='app'>
    //   <p>app</p>
      
    // </div>
    <div className="container">
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-5">
        <h3 className="text-capitalize text-center">todo input</h3>
        {/* when click on this button 
      should call function bring Data */}
      <div className='bg-primary'>ADD TODO</div>
      <Add createFunc={postNewTodo} />
      
      <div class="btn-group" role="group" aria-label="Basic example">
        <button className='btn btn-primary my-3 mx-3' onClick={getData}>GET ALL TASKS</button>
        <button className='btn btn-danger my-3 mx-3' onClick={deleteTasks}>DELETE Completed tasks </button>
        <button className='btn btn-success my-3 mx-3' onClick={() => { filterData(true); }}> GET DONE </button>
        <button className='btn btn-dark my-3 mx-3' onClick={() => { filterData(false); }}> GET PENDING </button>
      </div>

      <Register />
      
      <div className='bg-danger my-3'>TODO LIST</div>
      
      <table className='table table-bordered table-striped'>
      <thead>
            <tr>
                <th>IsCompleted</th>
                <th>TITLE</th>
                <th>Options</th>
            </tr>
        </thead>
          {mapOverTasks}
      </table>
      </div>
    </div>
  </div>
  );
}