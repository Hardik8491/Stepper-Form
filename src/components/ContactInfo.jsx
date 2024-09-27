import React from "react";
import { TextField, Grid } from "@mui/material";

const fields = [
    { label: "Address Line 1", name: "addressLine1", required: true },
    { label: "Address Line 2", name: "addressLine2", required: false },
    { label: "City", name: "city", required: true },
    { label: "State", name: "state", required: true },
    { label: "Country", name: "country", required: true },
    {
        label: "Pincode",
        name: "pincode",
        required: true,
        validate: (value) => /^\d{6}$/.test(value),
    },
];

const ContactInfo = ({ formData, handleChange, formTouched }) => {
    return (
        <Grid container spacing={2}>
            {fields.map(({ label, name, required, validate }) => (
                <Grid item xs={12} sm={6} key={name}>
                    <TextField
                        label={label}
                        value={formData[name]}
                        onChange={handleChange(name)}
                        fullWidth
                        required={required}
                        error={
                            (formTouched && required && !formData[name]) ||
                            (validate && !validate(formData[name]))
                        }
                        helperText={
                            formTouched && required && !formData[name]
                                ? `${label} is required`
                                : validate && !validate(formData[name])
                                ? "Enter a valid 6-digit pincode"
                                : ""
                        }
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ContactInfo;
