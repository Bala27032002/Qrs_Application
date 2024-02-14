import React, { useState } from 'react';

import Program1 from "../../images/program-delivery.png";
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const InfoCard = ({ icon, text }) => {
  const avatarStyle = {
    backgroundColor: '#2196f3',
    marginRight: '16px',
  };

  const textStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <div style={avatarStyle}>
        <img src={icon} alt="Icon" style={{ width: '24px', height: '24px' }} />
      </div>
      <span style={textStyle}>{text}</span>
    </div>
  );
};

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    course: '',
    mode: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form or perform further actions
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }

    if (!data.course.trim()) {
      errors.course = 'Please select a course';
    }

    if (!data.mode.trim()) {
      errors.mode = 'Please select a mode';
    }

    return errors;
  };

  return (
    <Container maxWidth="md" sx={{ position: 'relative', top: '5rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InfoCard icon={Program1} text="Training by Industry Experts" />
          <InfoCard icon="training.png" text="In-depth Practical Training" />
          <InfoCard icon="project.png" text="On the Job Project Training" />
          <InfoCard icon="classes.png" text="Classroom & Online Classes" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              required
              fullWidth
              margin="normal"
            />
            <Button variant="contained" type="submit" color="primary" fullWidth>
              Request a Callback
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignupForm;
