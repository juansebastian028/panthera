import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const CardService = ({ urlBtn, title, text, img, hasBtn }) => {
  const { t } = useTranslation();
  return (
    <div className='card-service'>
        <img className="card-service__img" src={img} alt="image" />
        <div className='card-service__content'>
          <h3 className='card-service__title'>{title}</h3>
          <p className='card-service__text'>{text}</p>
          {
            hasBtn &&
            <div className='card-service__btn-container'>
              <Link className='card-service__btn' to={urlBtn}>{t("SeeMoreBtn")}</Link>
            </div>
          }
        </div>
    </div>
  )
}
