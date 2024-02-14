// import React, { useState } from 'react';
// import { Container, Grid, Typography, TextField, Button } from '@mui/material';

// const EnquiryFormm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     areaOfInterest: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Perform form submission or other actions here
//       console.log(formData);
//       // Reset the form
//       setFormData({
//         name: '',
//         email: '',
//         phoneNumber: '',
//         areaOfInterest: '',
//         message: '',
//       });
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     if (formData.name.trim() === '') {
//       newErrors.name = 'Name is required';
//       isValid = false;
//     }

//     if (formData.email.trim() === '') {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     }

//     if (formData.phoneNumber.trim() === '') {
//       newErrors.phoneNumber = 'Phone number is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         mt: 4,
//         backgroundColor: '#66023b',
//         color: 'white',
//         padding: '2rem',
//         borderRadius: '8px',
//       }}
//     >
//       <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center', mb: 2 }}>
//         Enquiry Now
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               error={!!errors.name}
//               helperText={errors.name}
//               sx={{
//                 '& .MuiInputBase-input': { color: 'white', backgroundColor: 'white' },
//                 '& .MuiFormHelperText-root': { color: 'white' },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               sx={{
//                 '& .MuiInputBase-input': { color: 'white', backgroundColor: 'white' },
//                 '& .MuiFormHelperText-root': { color: 'white' },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Phone Number"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               error={!!errors.phoneNumber}
//               helperText={errors.phoneNumber}
//               sx={{
//                 '& .MuiInputBase-input': { color: 'white', backgroundColor: 'white' },
//                 '& .MuiFormHelperText-root': { color: 'white' },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Area of Interest"
//               name="areaOfInterest"
//               value={formData.areaOfInterest}
//               onChange={handleChange}
//               sx={{
//                 '& .MuiInputBase-input': { color: 'white', backgroundColor: 'white' },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Message"
//               name="message"
//               multiline
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               sx={{
//                 '& .MuiInputBase-input': { color: 'white', backgroundColor: 'white' },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: 'white', color: '#66023b' }}>
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default EnquiryFormm;
