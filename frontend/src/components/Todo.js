import React from 'react'

export default function Todo(props) {
  const { _id, title, isCompleted } = props.task
  return (
    <tbody>
      <tr>
        <td>
          <input type="checkbox" checked={isCompleted} onClick={() => props.toggleTodo(_id, !isCompleted)} />
        </td>
        <td>
          <span style={{ textDecoration: isCompleted ? 'line-through' : "none" }}>{title}</span></td>
        <td>
          <button className='btn btn-outline-danger m-3' onClick={() => { props.deleteTodo(_id) }}>
            <i className='bi bi-trash-fill'></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
}

{/* <div className="ms-3 me-3">
      <label class="list-group-item hstack gap-3">
        <input
          class="form-check-input me-1"
          type="checkbox"
          defaultChecked={isCompleted}
          onClick={() => {
            props.toggleTodo(_id, !isCompleted);
          }}
        />
        <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
          {title}
        </span>

        <button
          onClick={() => {
            props.deleteTodo(_id);
          }}
          className="btn btn-outline-danger"
        >
          <i class="bi bi-trash-fill"></i>
        </button>
      </label>
    </div> */}