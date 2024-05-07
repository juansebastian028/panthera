import React, { useEffect } from 'react'
import useForm from '../hooks/useForm'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames';

export const ContactForm = ({ theme }) => {

    const { t, ready } = useTranslation();

    const services = t("ServicesNested", { returnObjects: true });
    const { formData, handleInputChange, setFormData } = useForm({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        services: [],
        treatmentPolicies: false,
    });

    const inputTextColor = classNames({
        'input-text--black': theme === "white",
        'input-text--white': theme === "black",
    });

    const labelTextColor = classNames({
        'label-checkbox--black': theme === "white",
        'label-checkbox--white': theme === "black",
    });

    const checkboxesContainerColor = classNames({
        'contact-form__checkboxes-container--black': theme === "white",
        'contact-form__checkboxes-container--white': theme === "black",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    useEffect(() => {
        const newServices = Object.entries(services).map(([name, label]) => ({
            name: name.charAt(0).toLowerCase() + name.slice(1),
            label,
            checked: false
        }))
        setFormData({ ...formData, services: newServices });
    }, [...Object.values(services)]);


    if (!ready) return "loading translations...";

    return (
        <div className='contact-form__container'>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    className={classNames('input-text', inputTextColor)}
                    type="text"
                    name="fullName"
                    placeholder={t("ContactForm.FullName")}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className={classNames('input-text', inputTextColor)}
                    type="text"
                    name="companyName"
                    placeholder={t("ContactForm.Company")}
                    value={formData.companyName}
                    onChange={handleInputChange}
                />
                <input
                    className={classNames('input-text', inputTextColor)}
                    type="email"
                    name="email"
                    placeholder={t("ContactForm.Email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className={classNames('input-text', inputTextColor)}
                    type="tel"
                    name="phone"
                    placeholder={t("ContactForm.Phone")}
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <div className={classNames('contact-form__checkboxes-container', checkboxesContainerColor)}>
                    {
                        formData.services.map((service) => {
                            return <div>
                                <input
                                    className='contact-form__checkbox'
                                    type="checkbox"
                                    name={service.name}
                                    checked={service.checked}
                                    onChange={handleInputChange}
                                />
                                <label className={classNames('label-checkbox', labelTextColor)}>
                                    {service.label}
                                </label>
                            </div>
                        })
                    }
                </div>
                <div>
                    <input
                        className='contact-form__checkbox'
                        type="checkbox"
                        name='treatmentPolicies'
                        checked={formData.treatmentPolicies}
                        onChange={handleInputChange}
                    />
                    <label className={classNames('label-checkbox', labelTextColor)} htmlFor="treatmentPolicies">{t("ContactForm.TreatmentPolicies")}</label>
                </div>
                <div>
                    <button className='button' type="submit">{t("ContactForm.ButtonText")}</button>
                </div>
            </form>
        </div>
    )
}
