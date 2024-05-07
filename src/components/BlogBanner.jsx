import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Trans, useTranslation } from 'react-i18next';

export const BlogBanner = () => {
    const { t } = useTranslation();
    return (
        <div className='blog-banner'>
            <div className='blog-banner__content'>
                <h2 className='blog-banner__title'>
                    <Trans i18nKey='BlogBannerTitle' />
                </h2>
                <div className='blog-banner__search'>
                    <input className='blog-banner__input' type="text" name="search" placeholder={t('BlogBannerSearch')} />
                    <FontAwesomeIcon className='blog-banner__icon' icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    )
}
