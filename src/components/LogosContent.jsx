import React from 'react'

export const LogosContent = () => {
  return (
    <div className='logo-brand__scroll'>
        <div className='logo-brand__carousel-primary'>
            {
                [...Array(7)].map(() => (
                    <img className="logo-brand" src="assets/images/accedo.png" alt="accedo" />
                ))
            }
        </div>
        <div className='logo-brand__carousel-primary logo-brand__carousel-secondary'>
            {
                [...Array(7)].map(() => (
                    <img className="logo-brand" src="assets/images/accedo.png" alt="accedo" />
                ))
            }
        </div>
    </div>
  )
}
