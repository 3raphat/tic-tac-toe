import React, { useState } from 'react'
import Box from './Box'
import { MdLoop } from 'react-icons/md'
import confetti from 'canvas-confetti'

function Board() {
  const [boxes, setBoxes] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [count, setCount] = useState(0)

  const winner = calcWinner(boxes)
  let status

  if (winner) {
    status = `🎉 Winner: ${winner}!`
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  } else if (!winner && count === 9) {
    status = "It's a Tie"
  } else {
    status = `Player turn: ${isX ? '❌' : '⭕'}`
  }

  const renderBox = (i) => {
    return <Box value={boxes[i]} onClick={() => handleClick(i)} />
  }

  const handleClick = (i) => {
    if (calcWinner(boxes) || boxes[i]) return
    boxes[i] = isX ? '❌' : '⭕'
    setBoxes(boxes)
    setIsX(!isX)
    setCount(count + 1)
  }

  const handleReset = () => {
    setIsX(true)
    setBoxes(Array(9).fill(null))
    setCount(0)
  }

  function calcWinner(boxes) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i]
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a]
      }
    }
    return null
  }

  return (
    <div className='board'>
      <div className='board-row'>
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
      </div>
      <div className='board-row'>
        {renderBox(3)}
        {renderBox(4)}
        {renderBox(5)}
      </div>
      <div className='board-row'>
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
      </div>
      <h3>{status}</h3>
      <button className='reset-btn' onClick={handleReset}>
        Reset Board <MdLoop />
      </button>
    </div>
  )
}

export default Board
