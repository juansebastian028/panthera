import React from 'react'
import { CardBlog } from './CardBlog'

export const CardsBlog = () => {
    return (
        <div className='card-blog__container'>
            {
                [...Array(6)].map(() => (
                    <CardBlog />
                ))
            }
        </div>
    )
}
