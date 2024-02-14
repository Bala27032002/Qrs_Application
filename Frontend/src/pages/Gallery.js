import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import TitleComponent from '../Header';
import Banner from "../images/smartcliff1.jpeg";
import Banner1 from "../images/qrs2.jpg";
import Banner2 from "../images/qrsolution.jpg";
import { Typography } from '@mui/material';

const itemData = [
  {
    img: Banner,
    title: 'Smartcliff',
  },
  {
    img: Banner1,
    title: 'Smartcliff',
  },
  {
    img: Banner2,
    title: 'Smartcliff',
  },
];

export default function Gallery() {
  return (
    <section id="Gallery" style={{ position:'relative',bottom:'3rem'}}>
      <div style={{ paddingTop: '5rem' }}>
        <Typography variant='h4' style={{fontWeight:'700',textAlign:'center',justifyContent:'center',color:'#66023b',fontFamily:'serif'}}>Gallery</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImageList sx={{ width: 1400, height: 450, position: 'relative' }} cols={3} rowHeight={264}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} style={{ padding: '1rem' }}>
              <img src={item.img} alt={item.title} style={{ boxShadow: '0px 4px 5px 1px #000', height: '100%' }} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </section>
  );
}
