import React from 'react'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { ContactBackground } from '../../components/ContactBackground'
import { Video } from '../../components/Video'
import { CardWhite } from '../../components/Cards/CardWhite'
import { SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import Carousel from '../../components/Carousel'

export const CustomSoftware = () => {

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
        <h1 className='service__title'>{t("CustomSoftwareTitle")}</h1>
      </div>
      <Video src="https://pantherahub.com/videos/home-desktop.mp4" />
      <Carousel breakpoints={breakpoints} hasPagination={true}>
        {
           t('CustomSoftwareServices', {returnObjects: true}).map(({Title, Text}) => {
            return <SwiperSlide> <CardWhite title={Title} text={Text} /> </SwiperSlide>
          })

        }
      </Carousel>
      <ContactBackground theme="white" />
      <Footer />
    </div>
  )
}
