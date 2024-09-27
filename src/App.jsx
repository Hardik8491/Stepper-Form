import React, { useState } from "react";
import "./App.css"; // Import the updated CSS
import {
    Step,
    StepLabel,
    Button,
    Container,
    Stepper,
    Box,
} from "@mui/material";
import PersonalInfo from "./components/PersonalInfo";
import ContactInfo from "./components/ContactInfo";
import Review from "./components/Review";
import { FormProvider } from "./contex/FormContex";

const steps = ["User INFOMATION", "ADDRESS DETAILS", "Thank You"];

function App() {
    const [activeStep, setActiveStep] = useState(0);
    const [formTouchedIndex, setFormTouchedIndex] = useState(-1);
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

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };
    const handleBack = () => setActiveStep((prev) => prev - 1);

    const handleChange = (input) => (e) => {
        setFormTouchedIndex(activeStep);
        setFormData({ ...formData, [input]: e.target.value });
    };

    const handleSubmit = () => {
        setActiveStep(0); // Reset after submission
        setFormData({
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
    };

    const renderStepContent = (stepIndex) => {
        const isFormTouched = activeStep <= formTouchedIndex;

        switch (stepIndex) {
            case 0:
                return (
                    <PersonalInfo
                        formData={formData}
                        handleChange={handleChange}
                        formTouched={isFormTouched}
                    />
                );
            case 1:
                return (
                    <ContactInfo
                        formData={formData}
                        handleChange={handleChange}
                        formTouched={isFormTouched}
                    />
                );
            case 2:
                return <Review formData={formData} />;
            default:
                return <React.Fragment />;
        }
    };

    return (
        <FormProvider>
            <Container
                sx={{
                    padding: "0.5rem",
                    margin: "1rem auto",
                    borderRadius: "0.5rem",
                    background: "white",
                }}
            >
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    sx={{ marginY: "1rem" }}
                >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {renderStepContent(activeStep)}
                <Box sx={{ margin: "1rem" }}>
                    {activeStep !== steps.length - 1 && (
                        <>
                            <div className='buttons-container'>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Back
                                </Button>

                                <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={handleNext}
                                >
                                    Next
                                </Button>
                            </div>
                        </>
                    )}
                </Box>
                {/* </div> */}
            </Container>
        </FormProvider>
    );
}

export default App;
