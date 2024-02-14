import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Banner1 from "../../images/typeform.png";
import Banner2 from "../../images/hackerearth.png";
import Banner3 from "../../images/talentlms.png";
import Banner4 from "../../images/shl.png";

const toolsData = [
  {
    image: Banner1,
    alt: 'Typeform',
  },
  {
    image: Banner2,
    alt: 'HackerEarth',
  },
  {
    image: Banner3,
    alt: 'TalentLMS',
  },
  {
    image: Banner4,
    alt: 'SHL',
  },
];

const ToolsUsed = () => {
  return (
    <Container style={{ marginBottom: '5rem' }}>
      
      <Typography variant='h4' sx={{ fontFamily: "serif",fontWeight:'700',textAlign:'center',color:'#66023b'}}>TOOLS USED
</Typography><br/>
      <Grid container spacing={4}>
        {toolsData.map((tool, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card variant="outlined" sx={{ borderColor: 'black' }}>
              <CardContent>
                <img src={tool.image} alt={tool.alt} style={{ width: '100%', height: 'auto' }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ToolsUsed;
