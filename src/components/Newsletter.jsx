import React from 'react'
import useForm from '../hooks/useForm';
import { Trans, useTranslation } from 'react-i18next';

export const Newsletter = () => {

    const { t } = useTranslation();
    const { formData, handleInputChange } = useForm({
        name: '',
        email: '',
        privacyPolicies: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className='newsletter__container'>
            <div className='newsletter'>
                <div className='newsletter__content'>
                    <h3 className='newsletter__title'>
                        <Trans
                            i18nKey='Newsletter.Title'
                            components={{ pink: <span className="newsletter__color-pink" /> }}
                        />

                    </h3>
                    <p>{t("Newsletter.Subtitle")}</p>
                    <form className="newsletter__form" onSubmit={handleSubmit}>
                        <input
                            className='input-text input-text--black'
                            type="text"
                            name="name"
                            placeholder={t("Newsletter.Name")}

                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className='input-text input-text--black'
                            type="email"
                            name="email"
                            placeholder={t("Newsletter.Email")}
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <div>
                            <input
                                type="checkbox"
                                name='privacyPolicies'
                                checked={formData.privacyPolicies}
                                onChange={handleInputChange}
                            />
                            <label className='label-checkbox' htmlFor="privacyPolicies">
                                <Trans
                                    i18nKey='Newsletter.PrivacyPolicies'
                                    components={{ pink: <span className="newsletter__color-pink" /> }}
                                />
                            </label>
                        </div>
                        <div>
                            <button className='button' type="submit">{t("Newsletter.Btn")}</button>
                        </div>
                    </form>
                </div>
                <div className='newsletter__img-container'>
                    <img className='newsletter__img' src="assets\images\pexels-shvets-production-7561898.jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}
