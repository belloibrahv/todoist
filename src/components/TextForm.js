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
      <form onSubmit={handleSubmit} style={{ margin: '0 0 10px 40px' }}>
        <input style={{ padding: '10px 12px'  }} name='todo' onChange={handleChange} value={text} placeholder="Add Todo..."/>
        <button style={{ padding: '10px 12px', marginLeft: '12px'  }} type="submit">Add</button>
      </form>
      
    </div>
  );
}

export default TextForm
