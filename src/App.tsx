import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [level, setLevel] = useState(1)
  const [number, setNumber] = useState('')
  const [userInput, setUserInput] = useState('')
  const [isShowing, setIsShowing] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const generateNumber = (digits: number) => {
    return Math.floor(Math.random() * Math.pow(10, digits)).toString().padStart(digits, '0')
  }

  const startNewLevel = () => {
    const newNumber = generateNumber(level)
    setNumber(newNumber)
    setUserInput('')
    setIsShowing(true)
    setIsGameOver(false)
    setTimeLeft(5 + level) // More time for higher levels
    setIsPlaying(true)
  }

  const handleValidate = () => {
    if (userInput === number) {
      setScore(score + timeLeft * 10) // More points for faster completion
      setLevel(level + 1)
      setTimeout(startNewLevel, 1000)
    } else {
      setIsGameOver(true)
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsGameOver(true)
      setIsPlaying(false)
    }
  }, [timeLeft, isPlaying])

  useEffect(() => {
    if (isShowing) {
      const timer = setTimeout(() => {
        setIsShowing(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isShowing])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isShowing && !isGameOver) {
      handleValidate()
    }
  }

  return (
    <div className="game-container">
      <h1>Number Memory Game</h1>
      <div className="game-info">
        <p>Level: {level}</p>
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft}s</p>
      </div>
      
      <div className="number-display">
        {isShowing ? (
          <div className="number">{number}</div>
        ) : (
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter the number..."
            disabled={isGameOver}
          />
        )}
      </div>

      {!isShowing && !isGameOver && (
        <button onClick={handleValidate}>Validate</button>
      )}

      {isGameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Final Score: {score}</p>
          <button onClick={() => {
            setLevel(1)
            setScore(0)
            startNewLevel()
          }}>Play Again</button>
        </div>
      )}

      {!isPlaying && !isGameOver && (
        <button onClick={startNewLevel}>Start Game</button>
      )}
    </div>
  )
}

export default App
