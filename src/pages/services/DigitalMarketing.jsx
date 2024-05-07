import React from 'react'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { ContactBackground } from '../../components/ContactBackground'
import { useTranslation } from 'react-i18next'
import { Video } from '../../components/Video'
import { SwiperSlide } from 'swiper/react'
import { CardWhite } from '../../components/Cards/CardWhite'
import Carousel from '../../components/Carousel'

export const DigitalMarketing = () => {

  const { t } = useTranslation();

  const breakpoints = {
    1200: {
      slidesPerView: 1,
      spaceBetween: 1
    },
  }

  return (
    <div className='theme-white'>
      <Navigation theme="white" />
      <div className='service'>
        <h1 className='service__title'>{t("DigitalMarketingTitle")}</h1>
      </div>
      <Video src="https://pantherahub.com/videos/home-desktop.mp4" />
      <Carousel breakpoints={breakpoints} hasPagination={true}>
        {
          t('DigitalMarketingServices', { returnObjects: true }).map(({ Title, Text }) => {
            return <SwiperSlide> <CardWhite title={Title} text={Text} /> </SwiperSlide>
          })

        }
      </Carousel>
      <ContactBackground theme="white" />
      <Footer />
    </div>
  )
}
