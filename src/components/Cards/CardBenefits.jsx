import React from 'react'

export const CardBenefits = ({ colorTitle, title, text }) => {
  return (
    <div className='card-benefits'>
        <h4 className='card-benefits__title' style={{ color: colorTitle }}>{title}</h4>
        <p className='card-benefits__text'>{text}</p>
    </div>
  )
}
