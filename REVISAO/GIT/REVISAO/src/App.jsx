import { useState } from 'react';
import './App.css'

function App() {
const [contador, setContador] = useState(0)

function handleClick(){
  setContador((contador) => (
    contador + 1
  ))
  console.log(contador)
}

  return (
    <>
      <p>{contador}</p>
      <button onClick={handleClick}>AUMENTAR</button>
      <p>{Math.random()}</p>
    </>
  )
}

export default App
