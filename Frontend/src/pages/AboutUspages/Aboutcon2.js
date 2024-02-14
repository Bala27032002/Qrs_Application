import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../images/our belive.webp";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  // animation: 'moveUpDown 2s infinite ease-in-out',
  transform: 'translateY(0)',
  // '@keyframes moveUpDown': {
  //   '0%': {
  //     transform: 'translateY(0)',
  //   },
  //   '50%': {
  //     transform: 'translateY(-1rem)',
  //   },
  //   '100%': {
  //     transform: 'translateY(0)',
  //   },
  // },
  order: 2, // Add this line to position the image on the right side
});
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const Aboutcon = () => {
  return (
    <>
      <StyledContainer sx={{ position: 'relative' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Typography variant="h4" align="center" style={{fontWeight:'700',color:'#66023b',fontFamily:'serif'}} >
            OUR BELIEF
              {/* Smartcliff holds the Highly Professional Corporate Training programs on IT Software, Project Management */}
            </Typography>
            <Typography variant="body1" style={{textAlign:'justify'}}>
            We believe everyone is driven by an innate desire to learn and grow. By equipping people with the skills, the world needs, we help them redefine their careers, their companies and their lives. Today, people need to continuously build their skills and stay ready to take advantage of the next opportunity in an ever-changing world.
              {/* A purpose-built global career mobility solutions company transforming individual professionals and enterprise work-force by addressing the digital skills gap, train and empower them to forge a dream career path into future tech. From our */}
            </Typography>
            <br />
             {/* <Link to="/menu">
              <Button className="Enquirybutton" variant="contained" style={{ backgroundColor: "#66023b", color: 'white',fontFamily:'serif' }}>
                Apply Now
              </Button>
            </Link>  */}
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <StyledImage
              src={Banner}
              alt="About Image"
              style={{ animationDelay: '1s', marginBottom: '2rem' }}
            />
          </Grid>
        </Grid>
      </StyledContainer>
     
    </>
  );
};

export default Aboutcon;
