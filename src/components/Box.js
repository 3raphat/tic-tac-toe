import React from 'react'

function Box({ onClick, value }) {
  return (
    <div>
        <button className='btn' onClick={onClick}>
            {value}
        </button>
    </div>
  )
}

export default Box