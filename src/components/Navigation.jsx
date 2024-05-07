import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import Dropdown from './Dropdown';
import { useTranslation } from 'react-i18next';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navigation = ({ theme }) => {

    const { t } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`navbar ${theme === 'black' ? 'navbar--black' : 'navbar--white'}`}>
                <div className={`navbar__logo ${theme === 'black' ? 'navbar__logo--white' : 'navbar__logo--black'}`}>Panthera</div>
                <button className={`navbar__menu-icon ${theme === 'black' ? 'navbar__menu-icon--white' : 'navbar__menu-icon--black'}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={`navbar__menu ${theme === 'black' ? 'navbar__menu--black' : 'navbar__menu--white'} ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
                    <li className="navbar__item">
                        <Link to="/" className={`navbar__link ${theme === 'black' ? 'navbar__link--white' : 'navbar__link--black'}`}>{t("Home")}</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/hub" className={`navbar__link ${theme === 'black' ? 'navbar__link--white' : 'navbar__link--black'}`}>{t("Hub")}</Link>
                    </li>
                    <li className="navbar__item">
                        <Dropdown title={t("Services")} theme={theme}>
                            <Link className={`dropdown__link ${theme === 'black' ? 'dropdown__link--white' : 'dropdown__link--black'}`} to="/services/software-development">{t("ServicesNested.SoftwareDevelopment")}</Link>
                            <Link className={`dropdown__link ${theme === 'black' ? 'dropdown__link--white' : 'dropdown__link--black'}`} to="/services/custom-software">{t("ServicesNested.CustomSoftware")}</Link>
                            <Link className={`dropdown__link ${theme === 'black' ? 'dropdown__link--white' : 'dropdown__link--black'}`} to="/services/software-outsourcing">{t("ServicesNested.SoftwareOutsourcing")}</Link>
                            <Link className={`dropdown__link ${theme === 'black' ? 'dropdown__link--white' : 'dropdown__link--black'}`} to="/services/digital-marketing">{t("ServicesNested.DigitalMarketing")}</Link>
                            <Link className={`dropdown__link ${theme === 'black' ? 'dropdown__link--white' : 'dropdown__link--black'}`} to="/services/branding">{t("ServicesNested.Branding")}</Link>
                        </Dropdown>
                    </li>
                    <li className="navbar__item">
                        <Link to="/blog" className={`navbar__link ${theme === 'black' ? 'navbar__link--white' : 'navbar__link--black'}`}>{t("Blog")}</Link>
                    </li>
                    <li className="navbar__item">
                        {/* <Link to="/contact" className="navbar__link">{t("Contact")}</Link> */}
                        <a href="#contact" className={`navbar__link ${theme === 'black' ? 'navbar__link--white' : 'navbar__link--black'}`}>{t("Contact")}</a>
                    </li>
                    <li className="navbar__item">
                        <LanguageSelector theme={theme} />
                    </li>
                </ul>
            </nav>
        </>
    )
}
