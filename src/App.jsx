import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Characters</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          + New Character
        </button>
      </div>
    </>
  )
}

export default App
