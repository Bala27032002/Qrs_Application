import React, { useState } from 'react';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import axios from 'axios';

const Contactpage = ({ onUpdateTasks }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const url = 'http://localhost:5000/contact';

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      // Only allow alphabets in the name field
      setName(value);
      // Clear the error message
      setErrors({ ...errors, name: '' });
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        setErrors({ ...errors, name: 'Please enter alphabets only' });
      }
    } else if (name === 'email') {
      setEmail(value);
      // Clear the error message
      setErrors({ ...errors, email: '' });
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setErrors({ ...errors, email: 'Please enter a valid email address' });
      }
    } else if (name === 'phoneNumber') {
      // Allow only numbers and limit to 10 digits
      const sanitizedValue = value.replace(/[^0-9]/g, '');
      setPhoneNumber(sanitizedValue);
      // Clear the error message
      setErrors({ ...errors, phoneNumber: '' });
      if (!/^[6-9]\d{9}$/.test(sanitizedValue)) {
        setErrors({
          ...errors,
          phoneNumber:
            'Please enter a valid 10-digit phone number starting with 6-9',
        });
      }
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        con_name: name,
        con_email: email,
        con_phone: phoneNumber,
        con_message: message,
      };

      try {
        const response = await axios.post(url, formData);
        console.log('Task added successfully:', response.data);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        onUpdateTasks();
      } catch (error) {
        console.error('Failed to add task:', error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      newErrors.name = 'Please enter alphabets only';
      isValid = false;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone Number is required';
      isValid = false;
    }

    if (message.trim() === '') {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    setErrors(newErrors); // Update the errors state with the new error messages
    return isValid;
  };
  return (
    
    <Container maxWidth="md" sx={{ position:'relative',top:'5rem'}}>
      
      <Grid container spacing={2}>
      <section className="elementor-section elementor-inner-section elementor-element elementor-element-09d10a6 contact_address_box elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="09d10a6" data-element_type="section">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a958d0f" data-id="a958d0f" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d48590a elementor-widget elementor-widget-rs-contact-box" data-id="d48590a" data-element_type="widget" data-widget_type="rs-contact-box.default">
              <div className="elementor-widget-container" style={{position:'relative',left:'7rem',top:'4rem'}}>
                <div className="rs-contact-box">
                  <div className="address-item horizontal">
                    <div className="address-icon">
                      <Phone style={{fontSize:'3rem',position:'relative',right:'4rem',top:'3rem',color:'#66023b'}} />
                    </div>
                    <div className="address-text" >
                      <div className="phone">
                        <span className="label" style={{fontSize:'1.5rem',fontWeight:'900',color:'#66023b'}}>Phone</span><br/>
                        <a href="tel:0431 231 2880,  0431 231 2880," style={{textDecoration:'none',color:'black'}}>
                          <span className="des">+91811 007 7033,+91811 007 5700, <br/> 0422 – 3599640</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="address-item horizontal">
                    <div className="address-icon">
                      <Email style={{fontSize:'3rem',position:'relative',right:'4rem',top:'3rem',color:'#66023b'}} />
                    </div>
                    <div className="address-text">
                      <div className="email">
                        <span className="label"  style={{fontSize:'1.5rem',fontWeight:'900',color:'#66023b'}}>Email</span><br/>
                        <a href="mailto:contact@n-school.com" style={{textDecoration:'none',color:'black'}}>
                          <span className="des">enquiry@qrs.in</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="address-item horizontal">
                    <div className="address-icon">
                      <LocationOn style={{fontSize:'3rem',position:'relative',right:'4rem',top:'3rem',color:'#66023b'}}/>
                    </div>
                    <div className="address-text">
                      <div className="text">
                        <span className="label"  style={{fontSize:'1.5rem',fontWeight:'900',color:'#66023b'}}>Location</span><br/>
                        <span className="des">
                          
                        Ramakrishna Nagar,<br/>(opp. to Central Studio)<br/>
                        Sangillyandapuram<br/>
                        Tiruchirappalli <br/>TamilNadu-641 005


                         
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <Grid item xs={12} sm={6} style={{height:'55rem'}}>
        {/* <Typography variant='h4' style={{fontWeight:'700'}}>Enquiry Now</Typography>
        <Typography variant='h6' style={{fontWeight:'400'}}>Programming is a Dream and SmartCliff Academy makes sure
to fulfill your dream come true!.</Typography><br/> */}
          <Box
            sx={{
              backgroundColor: '#66023b',
              padding: '2rem',
              borderRadius: '8px',
              position:'relative',
              left:'8rem'
            }}
          ><Typography variant='h4' style={{color:'white',fontWeight:'600'}}>Get in Touch with us</Typography><br/>
            <form onSubmit={handleSubmit}>
            <label style={{position:'relative',color:'white'}}>Name:</label>
              <TextField
                label="Name"
                name="name"
                value={name}
                onChange={handleChange}
               
                fullWidth
                margin="normal"
                InputProps={{
                  style: {
                    color: '#66023b',
                    backgroundColor: 'white',
                  },
                }}
              />
               <label style={{position:'relative',color:'white'}}>Email:</label>
              <TextField
                label="Email"
                name="email"
                value={email}
                // onChange={handleChange}
               
                fullWidth
                margin="normal"
                InputProps={{
                  style: {
                    color: '#66023b',
                    backgroundColor: 'white',
                  },
                }}
              />
               <label style={{position:'relative',color:'white'}}>Phone-No:</label>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                // onChange={handleChange}
                
                fullWidth
                margin="normal"
                InputProps={{
                  style: {
                    color: '#66023b',
                    backgroundColor: 'white',
                  },
                }}
              />
               <label style={{ position: 'relative', color: 'white', color:'white' }}>Message:</label>
               <TextField fullWidth multiline rows={4}
                label="message"
                name="message"
                value={message}
                // onChange={handleChange}
                
 
                margin="normal"
                InputProps={{
                  style: {
                    color: '#66023b',
                    backgroundColor: 'white',
                  },
                }}
              />
             
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{
                  backgroundColor: 'white',
                  color: '#66023b',
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

export default Contactpage;
