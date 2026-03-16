import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)

  return (
    <>
      <Header score={score} highestScore={highestScore}/>
      <Cards
        score={score}
        setScore={setScore}
        highestScore={highestScore}
        setHighestScore={setHighestScore}/>
    </>
  )
}

export default App
