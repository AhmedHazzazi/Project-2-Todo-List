import React from 'react'

export default function Todo(props) {

  const { _id, title, isCompleted } = props.task
  return (
    <div className='Todo'>
      <table class="table">
        <tbody>
          <tr>
            <td>
              <input type="checkbox" checked={isCompleted} onClick={() => props.toggleTodo(_id, !isCompleted)} />
            </td>
            <td>
              <span style={{ textDecoration: isCompleted ? 'line-through' : "none" }}>{title}</span></td>
            <td>
              <button className='btn btn-danger mt-3' onClick={() => { props.deleteTodo(_id) }}>X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}