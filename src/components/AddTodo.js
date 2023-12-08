import React from 'react';

export function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');
  console.log('value ', value);

  const handleClick = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({ text: value, isCompleted: false });
    setValue('');
  };

  return (
    <div>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add new todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}
