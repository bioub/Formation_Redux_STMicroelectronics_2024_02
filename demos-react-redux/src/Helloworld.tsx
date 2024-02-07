// import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { nameSelector, updateName } from "./slices";

function Helloworld() {
  console.log('Helloworld renders');
  
  // const [name, setName] = useState('Romain');
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();

  function setName(val: string) {
    dispatch(updateName(val))
  }

  return (
    <div className="Helloworld">
      <div>
        Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <p>Hello {name}</p>
    </div>
  )
}

export default Helloworld;