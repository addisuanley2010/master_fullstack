import { useState } from 'react'
import './App.css'
function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Name: ${name}, Password: ${password}`);
}
  return (
    <>
      <h2>Hello Ethiopian Developer</h2>
      Name <input type="text"  onChange={(e)=>setName(e.target.value)}/>
      <br />
      Password <input type="password" onChange={(e)=>setPassword(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>submit</button>

    </>
  )
}

export default App
