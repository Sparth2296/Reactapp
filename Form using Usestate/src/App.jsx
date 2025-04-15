import { useState } from 'react'
import './App.css'
import TableUsingState from './component/TableUsingState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TableUsingState/>
    </>
  )
}

export default App
