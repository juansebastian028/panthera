import React, { useState } from "react";
import i18n from '../i18n';
import classNames from 'classnames';

const LanguageSelector = ({ theme }) => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const  langSelectColor = classNames({
        'lang-select--black': theme === "black",
        'lang-select--white': theme === "white",
      });

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);
        setSelectedLanguage(e.target.value);
    }

    return (
        <select className={classNames('lang-select', langSelectColor)} defaultValue={selectedLanguage} onChange={chooseLanguage}>
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    )

};

export default LanguageSelector;