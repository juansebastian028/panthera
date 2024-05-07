import React from 'react'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { ContactBackground } from '../../components/ContactBackground'
import { useTranslation } from 'react-i18next'
import Carousel from '../../components/Carousel'
import { SwiperSlide } from 'swiper/react'
import { CardWhite } from '../../components/Cards/CardWhite'

const imgList = [
  "../assets/images/accedo1.png",
  "../assets/images/alltruismo1.png",
  "../assets/images/ya-te-ayudo1.png",
];

export const Branding = () => {

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
        <h1 className='service__title'>{t("BrandigTitle")}</h1>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto'}}>
        <Carousel breakpoints={breakpoints} hasNavigation={true}>
          {

            imgList.map((img) => (
              <SwiperSlide> <img src={img} alt="image" style={{ width: "100%", maxWidth: '1000px' }} /> </SwiperSlide>
            ))

          }
        </Carousel>
        <Carousel breakpoints={breakpoints} hasPagination={true} >
          {
            t('BrandingServices', { returnObjects: true }).map(({ Title, Text }) => {
              return <SwiperSlide> <CardWhite title={Title} text={Text} /> </SwiperSlide>
            })

          }
        </Carousel>
      </div>
      <ContactBackground theme="white" />
      <Footer />
    </div>
  )
}
