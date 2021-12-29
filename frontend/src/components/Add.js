import React, { useState } from "react";

export default function Add(props) {
  const [newTitle, setNewTitle] = useState("");


  const createNewTodo = () => {
    //
    console.log("createNewTodo from ADD");
    // {"title":"task 5","isCompleted": false}
    props.createFunc({ title: newTitle, isCompleted: false });
  };

  return (
    <div className="m-3">
      <h3 className='text-center bg-primary p-2'>ADD TODO</h3>
      <form>
        <div className="form-floating mb-3">
          <input id="floatingInput" type="text" className="form-control" onChange={(e) => { setNewTitle(e.target.value); }} />
          <label htmlFor="floatingInput">New Todo Title</label>
          <div className="text-center m-3">
            <button className="btn btn-block btn-success m-2 m-3" onClick={createNewTodo}>Create New Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
}