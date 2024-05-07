import React, { useEffect, useState } from 'react'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer'
import { ContactBackground } from '../../components/ContactBackground'
import { useTranslation } from 'react-i18next'
import { CardsService } from '../../components/Cards/CardsService'


export const SoftwareOutsourcing = () => {

  const { t } = useTranslation();
  const [servicesList, setServicesList] = useState([]);
  const softwareOutsourcingServices = t('SoftwareOutsourcingServices', { returnObjects: true });

  useEffect(() => {
    const newList = softwareOutsourcingServices.map(s => ( { title: s.Title, text: s.Text,  hasBtn: false, img: "https://www.devprojournal.com/wp-content/uploads/2020/05/software-development-tools-696x392.jpg"} ));
    setServicesList(newList);
  }, [...Object.values(softwareOutsourcingServices)]);
  

  return (
    <div className='theme-white'>
      <Navigation theme="white" />
      <div className='service'>
        <h1 className='service__title'>{t("SoftwareOutsourcingTitle")}</h1>
        <p className='service__text'>{t("SoftwareDevelopmentText")}</p>
      </div>
      <CardsService services={servicesList} />
      <ContactBackground theme="white" />
      <Footer />
    </div>
  )
}
