import React from 'react'
import { useTranslation } from 'react-i18next';

export const CardMemberTeam = ({ name, role, img }) => {
    const { t } = useTranslation();
    return (
        <div className='card-member-team'>
            <div className='card-member-team__img-container'>
                <img className='card-member-team__img' src={img} alt="logo" />
            </div>
            <div className='card-member-team__content'>
                <h4 className='card-member-team__title'>{name}</h4>
                <p className='card-member-team__text'>{role}</p>
            </div>
        </div>
    )
}
