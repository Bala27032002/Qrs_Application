import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../images/about4.webp";
import Aboutcon from './Aboutcon2';
import Strength from '../Strength';
import ToolsUsed from './ToolsUsed';
import TryUI from '../Courses/TryUI';
import TrainingAndPlacement from '../TrainingAndPlacement';
import AboutCore from '../AboutCore';
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  // animation: 'moveUpDown 2s infinite ease-in-out',
  transform: 'translateY(0)',
  '@keyframes moveUpDown': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-1rem)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
});

const AboutUs = () => {
  return (
    <>
    <Layout>
    <TryUI text={"About Us"}/>
          <StyledContainer sx={{position:'relative',marginTop:'5rem'}}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <StyledImage
              src={Banner}
              alt="About Image"
              style={{ animationDelay: '1s', marginBottom: '2rem',position:'relative',right:'1.6rem' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" align="center" gutterBottom style={{fontWeight:'700',color:'#66023b',fontFamily:'serif'}}>
              About Us
              {/* Smartcliff holds the Highly Professional Corporate Training programs on IT Software, Project Management */}
            </Typography>
            <Typography variant="body1" style={{textAlign:'justify'}}>
              
A purpose-built global career mobility solutions company transforming individual professionals and enterprise work-force by addressing the digital skills gap, train and empower them to forge a dream career 
path into future tech. From our perspective, the need for reskilling and upskilling opportunities has never been higher. No matter the times career growth is key for people and the most exciting thing is to train the talent that the university does not cultivate, but that industry needs.
            </Typography>
            <br />
            {/* <Link to="/menu">
            <Button className="Enquirybutton" variant="contained" style={{ backgroundColor: "#66023b",fontSize:'15px' ,color:'white'}}>
               Enquiry Now<ArrowRightAltIcon/>
              </Button>
            </Link> */}
          </Grid>
        </Grid>
      </StyledContainer>
      <Aboutcon/>
      <Strength/>
      <AboutCore/>
      {/* <CarouselComponent /> */}
      {/* <TrainingPage/> */}
      
      <ToolsUsed />
      
      <TrainingAndPlacement/>
      {/* <Aboutcont /> */}
      </Layout>
      
      </>

  );
};

export default AboutUs;
