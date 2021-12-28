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
    <div className="Register">
      <form action="">
      <h3 className='text-center bg-success m-3 p-2'>Register</h3>
        <div className="row my-3">
          <div className="col-auto mx-3">
            <label className="form-label" htmlFor="email">Email:</label>
          </div>
          <div className="col-auto mx-4">
            <input className="form-control" type="email" placeholder="Write email here ..." onChange={(e) => { setEmail(e.target.value); }} value={email} />
          </div>
        </div>

        <div className="row my-3">
          <div className="col-auto mx-3">
            <label className="form-label" htmlFor="password">Password:</label>
          </div>
          <div className="col-auto">
            <input className="form-control" type="password" placeholder="Write password here ..." onChange={(e) => { setPassword(e.target.value); }} value={password} />
          </div>
        </div>
        
        <div className="row my-3">
          <div className="col-auto mx-3">
            <label className="form-label" htmlFor="username">Username:</label>
          </div>
          <div className="col-auto">
            <input className="form-control" type="text" placeholder="Write username here ..." onChange={(e) => { setUsername(e.target.value); }} value={username} />
          </div>
        </div>

        <div className="row my-3">
          <div class="col-auto">
            <input className="btn btn-dark my-3 mx-3" type="submit" value="Register" onClick={registerFunc} />
          </div>
          <div class="col-auto">
            <Link to='/login'>Have An Account?</Link>
          </div>
        </div>

      </form>
    </div>
  );
}