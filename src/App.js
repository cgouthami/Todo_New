import React from 'react';
import Todo from './components/Todo';
import { TodoForm } from './components/AddTodo';
// import { mockedFetch } from 'mocked-fetch';

export default function App() {
  const [todos, setTodos] = React.useState([
  
  ]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setTodos([...todos, ...data]);
        }, 1000);
      });
  }, []);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const completeTodo = (index, checkValue) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = checkValue;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <div className="app">
      <h1 style={{textAlign:'center',color:'white'}}>Todo App</h1>
      <TodoForm addTodo={addTodo} />

      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}

        {todos.length === 0 ? <div>Add some todos!</div> : null}
      </div>
     
    </div>
  );
}
