
import './App.css'
import Helloworld from './Helloworld'
import { useDispatch, useSelector } from 'react-redux'
import { incrementLikes, likesSelector } from './slices'

function App() {
  console.log('App renders');
  
  // const [count, setCount] = useState(0)
  const count = useSelector(likesSelector);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Demos React Redux</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementLikes())}>
          count is {count}
        </button>
      </div>
      <Helloworld />
    </>
  )
}

export default App
