import React from 'react'

export const CardWhite = ({ title, text }) => {
  return (
    <div className='card-white'>
        <h4 className='card-white__title'>{title}</h4>
        <p className='card-white__text'>{text}</p>
    </div>
  )
}
