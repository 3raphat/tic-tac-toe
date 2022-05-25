import React from 'react'

function Box(props) {
  return (
    <div>
        <button className='btn' onClick={() => props.onClick()}>
            {props.value}
        </button>
    </div>
  )
}

export default Box