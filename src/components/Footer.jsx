import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className='footer__border'>
                <h2 className='footer__title'>{t("Footer.Title")}</h2>
                <p className="footer__copyright">
                    PANTHERA HUB ©2024
                </p>
                <p className="footer__terms">
                    {t("Footer.Terms")}
                </p>
                <div className="footer__social-icons">
                    <a className='footer__social_icon--padding footer__social_icon' href="https://www.facebook.com/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className='footer__social_icon' href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className='footer__social_icon' href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className='footer__social_icon' href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
