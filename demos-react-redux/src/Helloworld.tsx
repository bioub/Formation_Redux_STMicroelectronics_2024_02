import { useState } from "react";

function Helloworld() {
  const [name, setName] = useState('Romain');

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