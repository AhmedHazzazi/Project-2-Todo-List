import React, { useState } from "react";

export default function Add(props) {
  const [newTitle, setNewTitle, isCompleted, setisCompleted] = useState("");

  const createNewTodo = () => {
    //
    console.log("createNewTodo from ADD");
    // {"title":"task 5","isCompleted": false}
    props.createFunc({ title: newTitle, isCompleted: setisCompleted });
  };

  return (
    <div className="card card-body my-3">
      <input type="text" placeholder="Write new title here ..." onChange={(e) => { setNewTitle(e.target.value); }} />
      <input type="checkbox" checked={isCompleted} onChange={(e) => {setisCompleted(e.target.checked ? false : true);}} />
      <button className="btn btn-block btn-success mt-3" onClick={createNewTodo}>Create New Todo</button>
    </div>
  );
}