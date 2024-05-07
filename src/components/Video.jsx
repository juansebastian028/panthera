import React from 'react'

export const Video = ({ src }) => {
    return (
        <div className='video__container'>
            <video className='video' loop autoPlay muted>
                <source src={src} type="video/mp4" />
            </video>
        </div>
    )
}
