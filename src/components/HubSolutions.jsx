import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HubSolutions = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    
    const { t } = useTranslation();
    return (
        <div className='hub-solutions'>
            <div className='hub-solutions__container'>
                <h3 data-aos="fade-up" data-aos-duration="1000" className='hub-solutions__title2'> {t("HubSolutions.Title")} <br/>  {t("HubSolutions.Title2")} </h3>
                <div data-aos="fade-right" data-aos-duration="1000" className='hub-solutions__content hub-solutions__content--height'>
                    <h2 className='hub-solutions__title'>{t("HubSolutions.MissionTitle")}</h2>
                    <p className='hub-solutions__text'>{t("HubSolutions.MissionText")}</p>
                </div>
            </div>
            <div className='hub-solutions__container'>
                <div data-aos="fade-left" data-aos-duration="1000" className='hub-solutions__content'>
                    <p className='hub-solutions__text'>{t("HubSolutions.Text")}</p>
                </div>
                <img data-aos="fade-up" data-aos-duration="1000" alt="background" className='hub-solutions__img' src="https://e4s.center/wp-content/uploads/2023/10/1_mobile_image_.jpg"></img>
            </div>
        </div>
    )
}
