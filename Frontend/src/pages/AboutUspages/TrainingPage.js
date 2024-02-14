import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import Banner from "../../images/intershipabout.png";
const TrainingPage = () => {
  return (
    <Container style={{position:'relative',bottom:'3rem'}}>
        <Typography variant='h4' sx={{ fontFamily: "serif",fontWeight:'700',textAlign:'center',color:'#66023b'}}>A Best Training Program at Smartcliff Academy
</Typography><br/>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src={Banner} alt="Training" style={{ width: '35rem', height: '22rem',marginTop:'3rem' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ width: 600, height: 150 ,color:'white', background: "#66023b"}}>
            <CardContent>
              <Typography variant="body1" gutterBottom style={{textAlign:'justify'}}>
              At Smartcliff, we frame well-developed IT internship programs in Coimbatore for undergraduate and postgraduate students. The internship program is a unique learning platform for students to experience the corporate world and sharpen their technical skills.
              </Typography>
              {/* <Typography variant="body1" paragraph>
              Our student internship program in Coimbatore is more than just theoretical exposure. As an Nschool intern, students have the chance to be a part of a prominent organisation and actively participate in making decisions that shape the company’s outcome.
              </Typography> */}
            </CardContent>
          </Card>
          <Card sx={{ width: 600, height: 150, marginTop: '1rem',color:'white', background: "#66023b" }}>
            <CardContent>
              <Typography variant="body1" gutterBottom style={{textAlign:'justify'}}>
               From working on real time projects to sharing ideas and insights that are instrumental in achieving the business goals, our IT internship programs prepare students for a successful career. The internship program is a unique learning platform for students to experience the corporate world and sharpen their technical skills
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 600, height: 150, marginTop: '1rem',color:'white', background: "#66023b" }}>
            <CardContent>
              <Typography variant="body1" gutterBottom style={{textAlign:'justify'}}>
                The HTD Division of Smartcliff provides the opportunity to ramp up the team for projects within a
                shorter duration. The internship program is a unique learning platform for students to experience the corporate world and sharpen their technical skills
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrainingPage;
