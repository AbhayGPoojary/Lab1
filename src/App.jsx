import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text,setText] = useState(0)

  return (
    <div className="App">
      <input type="text" placeholder='Type something..' value={text} onChange={(e)=>setText(e.target.value)} />
      <h1><strong>You Typed: {text}</strong></h1>
      <h2>{text.length}</h2>
    </div>
  );
}

export default App
