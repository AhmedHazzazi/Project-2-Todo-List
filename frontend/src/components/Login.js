import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = (e) => {
    e.preventDefault();
    const userInfo = {
      // "email":email
      email,
      password,
    };
    axios
      .post(`http://localhost:5000/users/login`, userInfo)
      .then((response) => {
        console.log("DATA: ", response.data);
        props.setIsLoggedIn(true);
        props.setUsername(response.data.username);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="Login">

      {/* <div className="Login"> */}
      {/* 
      <form action="">
        <label htmlFor="">Email:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="text"
          placeholder="Write email here ..."
        />
        <br />
        <label htmlFor="">Password:</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Write password here ..."
        />
        <br />
      <button type="button" class="btn btn-primary">Primary</button> 
        <input type="submit" value="Login" onClick={loginFunc} className="btn btn-primary" />
        <Link to="/Register">Don't Have An Account?</Link>
      </form> 
      */}
      <form className="m-3">
      <h3 className='text-center bg-primary m-3 p-2'>Login</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Login"
            onClick={loginFunc}
            className="btn btn-primary"
          />
          <Link to="/Register" className="btn btn-link">
            Don't Have An Account?
          </Link>
        </div>
      </form>
    </div>
  );
}