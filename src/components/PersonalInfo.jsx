import React from "react";
import {
  TextField,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  MenuItem,
} from "@mui/material";

const genders = ["Male", "Female"];
const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];
const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const fields = [
  { label: "First Name", name: "firstName", required: true },
  { label: "Middle Name", name: "middleName", required: false },
  { label: "Last Name", name: "lastName", required: true },
  { label: "Email", name: "email", required: true, type: "email" },
  { label: "Mobile Number", name: "mobileNo", required: true },
  { label: "Age", name: "age", required: true, type: "number" },
  { label: "Height (in cm)", name: "height", required: true, type: "number" },
  { label: "Weight (in kg)", name: "weight", required: true, type: "number" },
  { label: "Birth Date", name: "birthDate", required: true, type: "date" },
];

const PersonalInfo = ({ formData, handleChange, formTouched }) => {
  return (
    <Grid container spacing={1}>
      {fields.map(({ label, name, required, type }) => (
        <Grid item xs={12} sm={6} key={name}>
          <TextField
            label={label}
            value={formData[name]}
            onChange={handleChange(name)}
            fullWidth
            required={required}
            type={type}
            error={formTouched && required && !formData[name]}
            helperText={formTouched && required && !formData[name] ? `${label} is required` : ""}
          />
        </Grid>
      ))}

      {/* Blood Group */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Blood Group"
          value={formData.bloodGroup}
          onChange={handleChange("bloodGroup")}
          fullWidth
          select
          required
          error={formTouched && !formData.bloodGroup}
          helperText={formTouched && !formData.bloodGroup ? "Blood Group is required" : ""}
        >
          {bloodGroups.map((group) => (
            <MenuItem key={group} value={group}>
              {group}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* Gender (Radio Buttons) */}
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" required error={formTouched && !formData.gender}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            value={formData.gender}
            onChange={handleChange("gender")}
            row
          >
            {genders.map((gender) => (
              <FormControlLabel
                key={gender}
                value={gender}
                control={<Radio />}
                label={gender}
              />
            ))}
          </RadioGroup>
          {formTouched && !formData.gender && <p style={{ color: 'red', fontSize: "0.75rem" }}>Gender is required</p>}
        </FormControl>
      </Grid>

      {/* Marital Status (Radio Buttons) */}
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" required error={formTouched && !formData.maritalStatus}>
          <FormLabel component="legend">Marital Status</FormLabel>
          <RadioGroup
            value={formData.maritalStatus}
            onChange={handleChange("maritalStatus")}
            row
          >
            {maritalStatuses.map((status) => (
              <FormControlLabel
                key={status}
                value={status}
                control={<Radio />}
                label={status}
              />
            ))}
          </RadioGroup>
          {formTouched && !formData.maritalStatus && <p style={{ color: 'red', fontSize: "0.75rem" }}>Marital Status is required</p>}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
