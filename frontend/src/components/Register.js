import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("m.jouza7@yahoo.com");
  const [password, setPassword] = useState("123");
  const [username, setUsername] = useState("Jouza 7");

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
        <div  className="row my-3">
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
        
        <div class="col-auto">
          <input className="btn btn-dark my-3 mx-3" type="submit" value="Register" onClick={registerFunc} />
        </div>
        
      </form>
    </div>
  );
}