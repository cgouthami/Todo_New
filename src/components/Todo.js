import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
export default function Todo({ todo, completeTodo, index, deleteTodo }) {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        <input
          type="checkbox"
          onChange={event => {
            console.log(event.target.checked);
            completeTodo(index, event.target.checked);
          }}
        />
        {todo.text || todo.title}

        <span
          className="delete"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan}/>
        </span>
      </div>
    </div>
  );
}
