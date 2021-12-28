import React, { useState, useEffect } from 'react'
import './App.css';

import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import Todo from "./components/Todo";
import Add from "./components/Add";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    getData();
  },[]);

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
  
  const logoutFunc = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo
      key={taskObj._id}
      task={taskObj}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  ));
  
  return (
    <div className="container App">
      <div className="row">
        <p>Name: {username}</p>
      </div>
      
      <div className="row">
        <nav className=''ss="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <a className="navbar-brand" href="#"> Todos </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
      <button className="btn btn-primary m-3" onClick={logoutFunc}>Logout</button>
      <div className="row">
      <Routes>
        <Route
            path="/home"
            element={
              <div className="Home">
                <Add createFunc={postNewTodo} />
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button className='btn btn-primary my-3 mx-3' onClick={getData}>GET ALL TASKS</button>
                  <button className='btn btn-danger my-3 mx-3' onClick={deleteTasks}>DELETE Completed tasks </button>
                  <button className='btn btn-success my-3 mx-3' onClick={() => { filterData(true); }}> GET DONE </button>
                  <button className='btn btn-dark my-3 mx-3' onClick={() => { filterData(false); }}> GET PENDING </button>
                </div>
                <h3 className='text-center bg-danger m-3'>TODO LIST</h3>
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
            }
          />
        <Route
          path="/login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  </div>
  );
}