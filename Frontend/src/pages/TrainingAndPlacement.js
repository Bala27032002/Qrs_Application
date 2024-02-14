import React, { useState } from 'react';
import { Container, Typography, Grid, Avatar, Button } from '@mui/material';
import Event1 from '../images/staff1.png';
import Event2 from '../images/staff3.avif';
import Event3 from '../images/Bala1 (2).jpg';

const TrainingAndPlacement = () => {
  const [showAll, setShowAll] = useState(false);

  const staffMembers = [
    {
      id: 1,
      name: 'Angel',
      role: 'Web Development Specialist',
      image: Event1,
    },
    {
      id: 2,
      name: 'Sheeba',
      role: 'React Developer',
      image: Event2,
    },
    {
      id: 3,
      name: 'Benita',
      role: 'Communication',
      image: Event1,
    },
    {
      id: 4,
      name: 'John',
      role: 'UI/UX Designer',
      image: Event3,
    },
    {
      id: 5,
      name: 'Paramu',
      role: 'Project Manager',
      image: Event2,
    },
    {
      id: 6,
      name: 'David',
      role: 'Software Engineer',
      image: Event1,
    },
  ];

  const visibleStaffMembers = showAll ? staffMembers : staffMembers.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <Container style={{ marginBottom: '6rem' }}>
      <Typography variant="h4" align="center" fontWeight="600" style={{ color: '#66023b',fontFamily:'serif' }} gutterBottom>
        Get Trained By Industry Specialists
      </Typography>
      <Typography style={{ color: 'black', fontWeight: '500',fontFamily:'serif' }} variant="body1" align="center" gutterBottom>
        100% Placement Assistance
      </Typography><br/>
      <Grid container justifyContent="center" spacing={4}>
        {visibleStaffMembers.map((staff) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={staff.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <Avatar
              alt={staff.name}
              src={staff.image}
              sx={{ width: 120, height: 120, marginBottom: '1rem' }}
            />
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: '600', marginBottom: '0.5rem' }}
            >
              {staff.name}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: 'rgba(0, 0, 0, 0.54)' }}
            >
              {staff.role}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        {showAll ? (
          <Button variant="contained" style={{ backgroundColor: '#66023b', color: 'white' }} onClick={toggleShowAll}>
            View Less
          </Button>
        ) : (
          <Button variant="contained" style={{ backgroundColor: '#66023b', color: 'white' }} onClick={toggleShowAll}>
            View All
          </Button>
        )}
      </div>
    </Container>
  );
};

export default TrainingAndPlacement;
