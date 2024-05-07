import { useState } from 'react';

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            console.log(formData);
            console.log(name);
            if (formData.services.map(service => service.name).includes(name)) {
                // Si el campo es una lista de checkboxes
                const updatedServices = formData.services.map(service => {
                    if (service.name === name) {
                        return { ...service, checked };
                    } else {
                        return service;
                    }
                });
                setFormData({ ...formData, services: updatedServices });
            } else {
                // Si el campo es un checkbox individual
                setFormData({ ...formData, [name]: checked });
            }
        } else {
            // Para otros tipos de campos de entrada
            setFormData({ ...formData, [name]: value });
        }
    };



    const resetForm = () => {
        setFormData(initialState);
    };

    return {
        formData,
        handleInputChange,
        resetForm,
        setFormData,
    };
};

export default useForm;
