import React, { useState } from "react";

export default function Add(props) {
  const [newTitle, setNewTitle] = useState("");
  const [isCompleted, setCompleted] = useState("");


  const createNewTodo = () => {
    //
    console.log("createNewTodo from ADD");
    // {"title":"task 5","isCompleted": false}
    props.createFunc({ title: newTitle, isCompleted: setCompleted });
  };

  return (
    <div className="Add my-3">
        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12">
          <label className="" for="txt_title">Title:</label>
            <input id="txt_title" type="text" className="form-label mx-2" placeholder="Write new title here ..." onChange={(e) => { setNewTitle(e.target.value); }} />
          </div>

          {/* <div className="col-12">
            <input id="isCompletedChecked" type="checkbox" value="" className="form-check-input" onChange={(e) => { setisCompleted(e.target.checked.value ? false : true); }} />
            <label class="form-check-label" for="isCompletedChecked">isCompleted</label>
          </div> */}

          <div className="col-12 my-3 mx-3">
            <button className="btn btn-block btn-success mt-2 mx-3" onClick={createNewTodo}>Create New Todo</button>
          </div>
      </form>
    </div>
  );
}