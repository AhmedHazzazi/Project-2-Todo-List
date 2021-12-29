import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerFunc = (e) => {
    e.preventDefault();
    console.log("reg");
    const newUser = {
      // ES6
      email,
      // "email": "email value in the state"
      password,
      username,
    };
    axios
      .post(`http://localhost:5000/users/register`, newUser)
      .then((response) => {
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="m-3 Login d-flex justify-content-center">
      <form action="" className="text-center">
        <h3 className='text-center bg-success p-2'>Register</h3>
        <div className="form-floating mb-3">
          <input id="email" className="form-control" type="email" onChange={(e) => { setEmail(e.target.value); }} value={email} />
          <label htmlFor="email">Email:</label>
        </div>

        <div className="form-floating mb-3">
          <input id="password" className="form-control" type="password" placeholder="Write password here ..." onChange={(e) => { setPassword(e.target.value); }} value={password} />
          <label htmlFor="password">Password:</label>
        </div>
        
        <div className="form-floating mb-3">
          <input id="username" className="form-control" type="text" placeholder="Write username here ..." onChange={(e) => { setUsername(e.target.value); }} value={username} />
          <label htmlFor="username">Username:</label>
        </div>

        <div className="text-center m-3">
          <input className="btn btn-dark my-3 mx-3" type="submit" value="Register" onClick={registerFunc} />
          <Link to='/login'> Have An Account? </Link>
        </div>

      </form>
    </div>
  );
}