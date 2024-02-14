import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, FormControl, Select, MenuItem, IconButton, InputLabel } from '@mui/material';
import Layout from '../components/Layout/Layout';

import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import NumberFormat from 'react-number-format';

const HomeEnquiry = ({onUpdateTasks,onCloseModal} ) => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [areaOfInterest, setAreaOfInterest] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [messageLength, setMessageLength] = useState(0);
  const [messageError, setMessageError] = useState('');
  



  const [errors, setErrors] = useState({});

  const url = 'http://localhost:5000/enquriy'

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state based on the field name
    if (name === 'name') {
      setName(value);
      validateField(name, value);
      if (name === 'areaOfInterest') {
        setAreaOfInterest(value);
        setCategoryError(''); // Clear the category error when selecting an option
      }
    } else if (name === 'email') {
      setEmail(value);
      validateField(name, value);
    } else if (name === 'phoneNumber') {
      if (/^[6-9]$/.test(value.charAt(0)) && /^\d{0,10}$/.test(value)) {
        setPhoneNumber(value);
        validateField(name, value);
        
      }
    } else if (name === 'areaOfInterest') {
      setAreaOfInterest(value);
    } if (name === 'message') {
      if (value.length <= 200) {
        setMessage(value);
        setMessageLength(value.length);
        setMessageError('');
      } else {
        setMessageError('Message should not exceed 200 characters');
      }
    } 
  };
  

  //axios
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const formData = {
        enq_name: name,
        enq_email: email,
        enq_mobile: phoneNumber,
        area_interest: areaOfInterest,
        enq_message: message,
      };
  
      try {
        const response = await axios.post("http://localhost:5000/enquriy", formData);
        console.log("Response:", response.data);

  
        if (response.data.message === "Data already exists for this email and area of interest") {
          setAlertMessage("Data already exists for this email and area of interest");
        } else {
          setAlertMessage('');
          alert("Welcome to SmartCliff! Your enquiry has been submitted successfully.");
          setName('');
          setEmail('');
          setPhoneNumber('');
          setAreaOfInterest('');
          setMessage('');
        
          onUpdateTasks(); // Fetch the updated tasks list from the server and update the parent component
        }
      } catch (error) {
        console.error("Failed to add task:", error);
      }
    }
  };


  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === 'name') {
      if (value.trim() === '') {
        newErrors.name = 'Name is required';
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        newErrors.name = 'Name should only contain alphabets';
      } else {
        delete newErrors.name;
      }
    }
    
    if (name === 'email') {
      if (value.trim() === '') {
        newErrors.email = 'Email is required';
      } else if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(value)) {
        newErrors.email = 'Invalid email format';
      } else {
        delete newErrors.email;
      }
    }

    if (name === 'phoneNumber') {
      if (value.trim() === '') {
        newErrors.phoneNumber = 'Phone number is required';
      } else if (!/^[6-9]$/.test(value.charAt(0)) || !/^\d{0,10}$/.test(value)) {
        newErrors.phoneNumber = 'Invalid phone number format';
      } else {
        delete newErrors.phoneNumber;
      }
    }
  
    setErrors(newErrors);
  };
  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = 'Name should only contain alphabets';
    }
    
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[6-9]$/.test(phoneNumber.charAt(0)) || !/^\d{0,10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }
    if (!areaOfInterest) {
      newErrors.areaOfInterest = 'Please select a category';
    }
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };

  
  const isValidPhoneNumber = (value) => {
    return /^[6-9]\d{0,9}$/.test(value);
  };
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (isValidPhoneNumber(value) || value === '') {
      setPhoneNumber(value);
      validateField('phoneNumber', value);
    }
  };
  return (
    <>
      {/* <Layout> */}
        <Container maxWidth="md" sx={{ mt: 4, backgroundColor: '#fffcfe', color: '#66023b', padding: '2rem', borderRadius: '8px', height: '100%', width: '30rem', position: 'relative', bottom: '1rem' }}>
        <Typography variant="h4" sx={{fontWeight: '600', textAlign: 'center', mb: 2,position:'relative',bottom:'1rem' }}>
    Enquiry Now
    <IconButton
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      onClick={onCloseModal} 
     // Replace with your desired close behavior
    >
      <CloseIcon />
    </IconButton>
    </Typography>
          <form onSubmit={handleSubmit} style={{position:'relative',bottom:'1rem'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <label style={{ position: 'relative', color: 'white', color:'black' }}>Enter Name</label>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <label style={{ position: 'relative', color: 'white', color:'black' }}>Enter Email</label>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <label style={{ position: 'relative', color: 'white', color:'black' }}>Enter Phone_no.</label>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" error={!!errors.areaOfInterest || !!categoryError}>
  <label style={{ position: 'relative', color: 'white', color: 'black', position: 'relative', bottom: '1rem' }}>Select Category</label>
  {/* <InputLabel id="areaOfInterest-label" style={{ color: 'black' }}>Select Category</InputLabel> */}
  <Select
    labelId="mode-label"
    id="mode"
    name="areaOfInterest"  // Corrected name attribute
    value={areaOfInterest}
    onChange={handleChange}
    style={{
      color: 'black',
      backgroundColor: 'white',
      position: 'relative',
      bottom: '1rem'
    }}
  >
    <MenuItem value="" disabled>
      <em>Select</em>
    </MenuItem>
    <MenuItem value="Software Testing">Software Testing</MenuItem>
    <MenuItem value="Software Development">Software Development</MenuItem>
    <MenuItem value="Embedded Software">Embedded Software</MenuItem>
    <MenuItem value="Mechanical">Mechanical</MenuItem>
  </Select>
  {(!!errors.areaOfInterest || !!categoryError) && (
    <Typography variant="caption" color="error">
      {errors.areaOfInterest || categoryError}
    </Typography>
  )}
</FormControl>

                {/* <TextField fullWidth label="Area of Interest" name="areaOfInterest" value={areaOfInterest} onChange={handleChange} /> */}
              </Grid>
              
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} label="Message" name="message" value={message} onChange={handleChange}
    error={!!messageError}
    helperText={messageError || `${messageLength}/200`}
  />

              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#66023b', color: 'white' }}>
                  Submit
                </Button>
                {alertMessage && (
                  <Typography variant="caption" color="error" sx={{ marginTop: '0.5rem' }}>
                    {alertMessage}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        </Container>
      {/* </Layout> */}
    </>
  );
};

export default HomeEnquiry;
