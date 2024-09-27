import React from "react";
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

const Review = ({ formData }) => {
    const fields = [
        { label: "First Name", value: formData.firstName },
        { label: "Middle Name", value: formData.middleName },
        { label: "Last Name", value: formData.lastName },
        { label: "Email", value: formData.email },
        { label: "Mobile Number", value: formData.mobileNo },
        { label: "Age", value: formData.age },
        { label: "Height", value: `${formData.height} cm` },
        { label: "Weight", value: `${formData.weight} kg` },
        { label: "Birth Date", value: formData.birthDate },
        { label: "Blood Group", value: formData.bloodGroup },
        { label: "Gender", value: formData.gender },
        { label: "Marital Status", value: formData.maritalStatus },
        { label: "Address Line 1", value: formData.addressLine1 },
        { label: "Address Line 2", value: formData.addressLine2 },
        { label: "City", value: formData.city },
        { label: "State", value: formData.state },
        { label: "Country", value: formData.country },
        { label: "Pincode", value: formData.pincode },
    ];

    return (
        <div>
            <Typography variant='h4' gutterBottom sx={{ color: "green" }}>
                Data added Successfully
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ padding: ".5rem", width: "50%" }}>
                                Field
                            </TableCell>
                            <TableCell sx={{ padding: ".5rem" }}>
                                Value
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fields.map((field, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    sx={{ padding: ".5rem", width: "50%" }}
                                >
                                    {field.label}
                                </TableCell>
                                <TableCell sx={{ padding: ".5rem" }}>
                                    {field.value}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Review;
