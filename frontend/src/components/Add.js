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
    <form className="row row-cols-lg-auto g-3 align-items-center">
      <div className="col-12">
        <input type="text" className="form-label" placeholder="Write new title here ..." onChange={(e) => { setNewTitle(e.target.value); }} />
      </div>

      <div className="col-12">
        {/* <input type="checkbox" checked={isCompleted} onChange={(e) => { setisCompleted(e.target.checked ? false : true); }} /> */}
      </div>

      <div className="col-12">
        <button className="btn btn-block btn-success mt-3" onClick={createNewTodo}>Create New Todo</button>
      </div>
    </form>
  );
}