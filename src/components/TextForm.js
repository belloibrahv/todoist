import { useState } from "react"
import shortid from "shortid"

const TextForm = ({ onSubmit }) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText([e.target.name] = e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      id: shortid.generate(),
      text,
      complete: false
    })
    // console.log(text)
    setText('')
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name='todo' onChange={handleChange} value={text} placeholder="Add Todo..."/>
        <button type="submit">Add</button>
      </form>
      
    </div>
  );
}

export default TextForm
