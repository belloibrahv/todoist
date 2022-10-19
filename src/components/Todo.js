
const Todo = ({todo, toggleComplete, onDelete}) => {
  return (
    <div style={{ display: 'flex'}}>
      <div style={{  textDecoration: todo.complete ? 'line-through': '', fontSize: '24px' }} onClick={toggleComplete}>{todo.text}</div>
      <button onClick={onDelete}>X</button>
    </div>
  )

}

export default Todo
