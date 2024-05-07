import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ContactBackground } from '../components/ContactBackground'
import { HomeBanner } from '../components/HomeBanner'
import { useTranslation } from 'react-i18next'
import { Video } from '../components/Video'
import { CardsService } from '../components/Cards/CardsService'
import { LogosContent } from '../components/LogosContent'
import TripleSlider from '../components/TripleSlider'

const servicesList = [
  {
    urlBtn: '/services/software-development',
    title: "ServicesNested.SoftwareDevelopment",
    text: "ServicesDescriptions.SoftwareDevelopment",
    img: "https://www.devprojournal.com/wp-content/uploads/2020/05/software-development-tools-696x392.jpg",
    hasBtn: true,

  },
  {
    urlBtn: '/services/custom-software',
    title: "ServicesNested.CustomSoftware",
    text: "ServicesDescriptions.CustomSoftware",
    img: "https://www.devprojournal.com/wp-content/uploads/2020/05/software-development-tools-696x392.jpg",
    hasBtn: true,
  },
  {
    urlBtn: '/services/software-outsourcing',
    title: "ServicesNested.SoftwareOutsourcing",
    text: "ServicesDescriptions.SoftwareOutsourcing",
    img: "https://www.devprojournal.com/wp-content/uploads/2020/05/software-development-tools-696x392.jpg",
    hasBtn: true,
  },
  {
    urlBtn: '/services/digital-marketing',
    title: "ServicesNested.DigitalMarketing",
    text: "ServicesDescriptions.DigitalMarketing",
    img: "https://www.devprojournal.com/wp-content/uploads/2020/05/software-development-tools-696x392.jpg",
    hasBtn: true,
  },
  {
    urlBtn:
      '/services/branding',
    title: "ServicesNested.Branding",
    text: "ServicesDescriptions.Branding",
    img: "https://www.devprojournal.com/wp-content/uploads/2020/05/software-development-tools-696x392.jpg",
    hasBtn: true,
  },
];

export const Home = () => {


  const { t } = useTranslation();

  return (
    <div className='theme-black'>
      <Navigation theme="black" />
      <HomeBanner title={t("HomeBanner1.Title")} text={t("HomeBanner1.Text")} />
      <CardsService services={servicesList} />
      <LogosContent />
      <Video src="https://pantherahub.com/videos/home-desktop.mp4" />
      <HomeBanner title={t("HomeBanner2.Title")}  text={t("HomeBanner2.Text")} hasAnimation={true} />
      <TripleSlider />
      <ContactBackground theme="black" />
      <Footer />
    </div>
  )
}
