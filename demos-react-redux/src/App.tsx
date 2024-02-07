import { useState } from 'react'
import './App.css'
import Helloworld from './Helloworld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Demos React Redux</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Helloworld />
    </>
  )
}

export default App
