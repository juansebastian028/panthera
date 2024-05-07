import React from 'react'
import { useTranslation } from 'react-i18next';

export const CardBrand = ({ title, text, isActive }) => {
    const { t } = useTranslation();
    return (
        <div className='card-brand'>
            <div className='card-brand__img-container'>
                <img 
                    className={`card-brand__img ${isActive ? 'card-brand__img--blur' : ''}`} 
                    src="https://motorolaus.vtexassets.com/arquivos/ids/162812/thinkphone-pdp-ecom-render-1-carbon-black-n5re8wvk.png?v=638084623518870000" 
                    alt="logo"
                />
            </div>
            <div 
                className={`card-brand__content ${isActive ? 'card-brand__content--hidden' : ''}`} 
            >
                <h3 className='card-brand__title'>{title}</h3>
                <p className='card-brand__text'>{text}</p>
                <a className='card-brand__btn' href="/">{t("SeeMoreBtn")}</a>
            </div>
        </div>
    )
}
