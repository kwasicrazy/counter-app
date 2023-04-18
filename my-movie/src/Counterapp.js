import React, { useState } from 'react'

const Counterapp = () => {

  const [number, setNumber] = useState(0)

  return (
    <div>
        <h1>Counter App</h1>
        <h1>Number : {number}</h1>
        <button onClick={() => setNumber(number -1)}>-</button>
        <button onClick={() => setNumber(number +1)}>+</button>
        
    </div>
  )
}

export default Counterapp