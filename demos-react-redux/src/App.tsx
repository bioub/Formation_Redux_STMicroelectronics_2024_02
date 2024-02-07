import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
