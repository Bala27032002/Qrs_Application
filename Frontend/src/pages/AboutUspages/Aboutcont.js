import React, { useState } from 'react';
import { Container, Typography, Box, IconButton, Collapse } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const Aboutcont = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const handleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const handleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  const handleExpand4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Training Course and Placement Institute
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
        <IconButton onClick={handleExpand1}>
          <ExpandMore fontSize="large" />
        </IconButton>
        <IconButton onClick={handleExpand2}>
          <ExpandMore fontSize="large" />
        </IconButton>
        <IconButton onClick={handleExpand3}>
          <ExpandMore fontSize="large" />
        </IconButton>
        <IconButton onClick={handleExpand4}>
          <ExpandMore fontSize="large" />
        </IconButton>
      </Box>
      <Collapse in={isExpanded1}>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Course Details 1
          </Typography>
          <Typography variant="body1" paragraph>
            Course description goes here...
          </Typography>
        </Box>
      </Collapse>
      <Collapse in={isExpanded2}>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Course Details 2
          </Typography>
          <Typography variant="body1" paragraph>
            Course description goes here...
          </Typography>
        </Box>
      </Collapse>
      <Collapse in={isExpanded3}>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Course Details 3
          </Typography>
          <Typography variant="body1" paragraph>
            Course description goes here...
          </Typography>
        </Box>
      </Collapse>
      <Collapse in={isExpanded4}>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Course Details 4
          </Typography>
          <Typography variant="body1" paragraph>
            Course description goes here...
          </Typography>
        </Box>
      </Collapse>
    </Container>
  );
};

export default Aboutcont;
