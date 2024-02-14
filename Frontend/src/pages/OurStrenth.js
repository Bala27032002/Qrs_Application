import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../styles/HomeStyles.css';

const CustomCard = styled(Card)(({ theme, index }) => ({
  width: '300px',
  height: '80px',
  background: index === 0 ? '#fac78c' : index === 1 ? '#fac78c' : '#fac78c',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  animation: `moveUpDown 2s infinite ${index * 0.2}s alternate`,
}));

const CustomCardContent = styled(CardContent)({
  textAlign: 'center',
});

export default function ResponsiveCardGrid() {
  return (
    <Grid
      container
      className="home"
      style={{ height: '100%', background: 'white', position: 'relative', top: '5rem' }}
    >
      <Container maxWidth="xl" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: '600' }} gutterBottom>
          Our Strength
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard className="custom-card" index={0}>
              <CustomCardContent>
                <Typography variant="h5">5,000 Trained Professionals</Typography>
                <Typography variant="body2">
                  We have trained and skilled professionals ready to help you.
                </Typography>
              </CustomCardContent>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard className="custom-card" index={1}>
              <CustomCardContent>
                <Typography variant="h5">20+ Tied-up IT Companies</Typography>
                <Typography variant="body2">
                  We have collaborations with leading IT companies.
                </Typography>
              </CustomCardContent>
            </CustomCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomCard className="custom-card" index={2}>
              <CustomCardContent>
                <Typography variant="h5">10+</Typography>
                <Typography variant="h5">IT Courses</Typography>
                <Typography variant="body2">
                  Choose from a wide range of IT courses for your career growth.
                </Typography>
              </CustomCardContent>
            </CustomCard>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
