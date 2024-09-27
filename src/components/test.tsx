import React from "react";
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <Grid container spacing={2}>
      {/* First Name */}
      <Grid item xs={12} sm={6}>
        {/* Your other fields like First Name, Last Name, etc. */}
      </Grid>

      {/* Marital Status (Radio Buttons) */}
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" required error={!formData.maritalStatus}>
          <FormLabel component="legend">Marital Status</FormLabel>
          <RadioGroup
            value={formData.maritalStatus}
            onChange={handleChange("maritalStatus")}
            row // Makes the radio buttons appear in a row
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
          {!formData.maritalStatus && <p style={{ color: 'red' }}>Marital Status is required</p>}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
