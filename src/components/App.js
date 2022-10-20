import { useState } from "react";
import TextForm from "./TextForm";
import Todo from "./Todo";

function App() {
  const [todos, setTodo] = useState([])
  const [todosToshow, setTodoToShow] = useState('all')
  
  const addTodo = (todo) => {
    setTodo([todo, ...todos])
  } 

  const toggleComplete = (id) => {
    setTodo(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        return todo
      }
    }))
  }

  const updateTodoToShow = (todo) => {
    setTodoToShow(todo)
  }

  const handleDeleteTodo = (id) => {
    setTodo(todos.filter(todo => todo.id !== id))
  }

  const deleteAllCompletedTodo = () => {
    setTodo(todos.filter(todo => !todo.complete))
  }

  let todosx = []

  if (todosToshow === 'all') {
    todosx = todos
  } else if (todosToshow === 'active') {
    todosx = todos.filter(todo => !todo.complete)
  } else {
    todosx = todos.filter(todo => todo.complete)
  }



  return (

    <div className="App">
      <TextForm onSubmit={addTodo} />

      {todosx.map((todo) => (
        <Todo 
          key={todo.id} 
          toggleComplete={() => toggleComplete(todo.id)}
          todo={todo}
          onDelete={() => handleDeleteTodo(todo.id)} 
        />
       ))}
      <div>todos left: {todosx.filter(todo => !todo.complete).length}</div>
      <div>
        <button onClick={() => updateTodoToShow('all')}>all</button>
        <button onClick={() => updateTodoToShow('active')}>active</button>
        <button onClick={() => updateTodoToShow('complete')}>complete</button>
      </div>
      {todos.some(todo => todo.complete) ? <button onClick={deleteAllCompletedTodo}>delete all complete</button> : null}
    </div>
  );
}

export default App;
