import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const HubBanner = () => {
    const { t } = useTranslation();

    return (
        <div className='hub-banner'>
            <h1
                className='hub-banner__title'
            >
                {t("HubBanner.Title")}
            </h1>
        </div>
    )
}
