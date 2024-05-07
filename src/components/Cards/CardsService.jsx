import React from 'react'
import { CardService } from './CardService'
import { useTranslation } from 'react-i18next';

export const CardsService = ({ services }) => {
    const { t } = useTranslation();
    return (
        <div className='card-service__container'>
            {
                services.map(service => (
                    <CardService urlBtn={service.hasBtn ? service.url : ''} title={t(service.title)} text={t(service.text)} img={service.img} hasBtn={service.hasBtn} />
                ))
            }
        </div>
    )
}
