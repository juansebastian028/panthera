import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ContactBackground } from '../components/ContactBackground'
import { OurTeam } from '../components/OurTeam'
import { HubBanner } from '../components/HubBanner'
import { HubSolutions } from '../components/HubSolutions'

export const Hub = () => {
  return (
    <div className='theme-black'>
      <Navigation theme="black" />
      <HubBanner />
      <HubSolutions />
      <OurTeam />
      <ContactBackground theme="black" />
      <Footer />
    </div>
  )
}
