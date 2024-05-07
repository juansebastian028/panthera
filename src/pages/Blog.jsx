import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ContactBackground } from '../components/ContactBackground'
import { BlogBanner } from '../components/BlogBanner'
import { Newsletter } from '../components/Newsletter'
import { CardsBlog } from '../components/Cards/CardsBlog'
import { CardBlog } from '../components/Cards/CardBlog'

export const Blog = () => {
  return (
    <div className='theme-white'>
      <Navigation theme="white" />
      <BlogBanner />
      <div className='card-blog__container' style={{ marginTop: '100vh'}}>
        <CardBlog isRow={true} />
      </div>
      <CardsBlog />
      <Newsletter />
      <ContactBackground theme="white" />
      <Footer />
    </div>
  )
}
