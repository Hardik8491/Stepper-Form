import React, { createContext, useState, useContext } from "react";

// Create Context
const FormContext = createContext();

// Context Provider Component
export const FormProvider = ({ children }) => {
    // Initialize formData state
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        age: "",
        height: "",
        weight: "",
        birthDate: "",
        bloodGroup: "",
        gender: "",
        maritalStatus: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    });

    // Initialize touched state
    const [touched, setTouched] = useState({
        firstName: false,
        middleName: false,
        lastName: false,
        email: false,
        mobileNo: false,
        age: false,
        height: false,
        weight: false,
        birthDate: false,
        bloodGroup: false,
        gender: false,
        maritalStatus: false,
        addressLine1: false,
        addressLine2: false,
        city: false,
        state: false,
        country: false,
        pincode: false,
    });

    // Handle change function for form fields
    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    // Handle blur function for touched fields
    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
    };

    // Provide form data, touched state, and handlers to the context
    return (
        <FormContext.Provider
            value={{ formData, handleChange, touched, handleBlur }}
        >
            {children}
        </FormContext.Provider>
    );
};

// Custom hook to use the form context
export const useFormContext = () => {
    return useContext(FormContext);
};
