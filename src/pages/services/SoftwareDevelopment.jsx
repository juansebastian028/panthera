import React from 'react'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { ContactBackground } from '../../components/ContactBackground'
import { useTranslation } from 'react-i18next'
import { Video } from '../../components/Video'
import { Benefits } from '../../components/Benefits'

export const SoftwareDevelopment = () => {

  const { t } = useTranslation();

  return (
    <div className='theme-white'>
      <Navigation theme="white" />
      <div className='service'>
        <h1 className='service__title'>{t("SoftwareDevelopmentTitle")}</h1>
      </div>
      <Video src="https://pantherahub.com/videos/home-desktop.mp4" />
      <Benefits />
      <ContactBackground theme="white" />
      <Footer />
    </div>
  )
}
