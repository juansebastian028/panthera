import React from 'react'
import { useTranslation } from 'react-i18next';
import { ContactForm } from './ContactForm';

export const ContactBackground = ({ theme }) => {

  const { t } = useTranslation();

  return (
    <div id="contact" className="contact-background">
      <div className="contact-background__container">
        <h2 className='contact-background__title'>{t("ContactBackground.Title")}</h2>
        <p className='contact-background__text'>{t("ContactBackground.Text")}</p>
      </div>
      <ContactForm theme={theme} />
    </div>
  )
}
