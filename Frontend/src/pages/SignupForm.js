
import React, { useState } from 'react';
import Banner from "../images/joinusimage.webp";
import {
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import axios from 'axios';
// import { useTheme } from '@emotion/react';

const SignupForm = ({ onUpdateTasks }) => {
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
  const theme = useTheme(); // Get the theme object
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  



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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     // Perform form submission or other actions here
  //     const formData = {
  //       name,
  //       email,
  //       phoneNumber,
  //       areaOfInterest,
  //       message,
  //     };
  //     console.log(formData);
  //     // Reset the form
  //     setName('');
  //     setEmail('');
  //     setPhoneNumber('');
  //     setAreaOfInterest('');
  //     setMessage('');
  //     // Navigate to another page
  //     navigate('/program');
  //   }
  // };

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
    <Container maxWidth="md" sx={{ position: 'relative', right: isMobile ? '2rem' : '-1rem',bottom:'8rem' }}>
      <Grid container spacing={isMobile ? 2 : 4}>
      {!isMobile && ( // Display the image only on non-mobile devices
          <Grid item xs={12} sm={6}>
            <img
              src={Banner}
              alt="Learning Experience"
              style={{
                width: '22rem',
                height: '33rem',
                objectFit: 'cover',
                borderRadius: '8px',
                position: 'relative',
                top: '2rem',
                right: '4rem',
              }}
            />
          </Grid>
        )}
         <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: '#fffff',
              padding: isMobile ? '1rem' : '2rem',
              borderRadius: '8px',
              position: 'relative',
              left: isMobile ? '2rem' : '4rem',
            }}
          >
            <Typography variant='h4' style={{ color: 'white', fontWeight: '600', color:'#66023b', fontFamily:'serif' }}>
              Enquiry Now
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                fullWidth
                margin="normal"
             
                InputProps={{
                  style: {
                    color: 'black',
                    backgroundColor: 'white',
                  },
                }}
              />
              <TextField
                label="Email"
                name="email"
                value={email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                fullWidth
                margin="normal"
              
              
                InputProps={{
                  style: {
                    color: '#66023b',
                    backgroundColor: 'white',
                  },
                }}
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                fullWidth
                margin="normal"
              
                InputProps={{
                  style: {
                    color: 'black',
                    backgroundColor: 'white',
                  },
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Select Category</InputLabel>
                <Select
    labelId="mode-label"
    id="mode"
    name="areaOfInterest"  // Corrected name attribute
    value={areaOfInterest}
    onChange={handleChange}
    style={{
      color: 'black',
      backgroundColor: 'white',
     
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
               
              </FormControl>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                name="message"
                value={message} onChange={handleChange}
                error={!!messageError}
                helperText={messageError || `${messageLength}/200`}
             
            
                InputProps={{
                  style: {
                    color: 'black',
                    backgroundColor: 'white',
                  },
                }}
              />
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{
                  backgroundColor: '#66023b',
                  color: 'white',
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignupForm;