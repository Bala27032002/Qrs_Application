import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Card, Container } from "react-bootstrap";
import { CardContent, CardMedia, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { ImageListItem, ImageList } from "@mui/material";
import axios from 'axios'; // Import Axios
import Layout from "../components/Layout/Layout";
import CourseTryui from "./CourseTryui";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Tabs, Tab } from "@mui/material";
import CategoryList from "./CategoryList";
import HomeEnquiryModal from "./Modal/HomeEnquiryModal";


const Reduxcourse = () => {

  const [tasksList, setTasksList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const[updateUI,setUpdateUI]=useState(false);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/category");
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchCategories();
  }, []);
  

  useEffect(()=>{
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      setTasksList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
//useeffeect


  fetchTasks();
}, [updateUI]);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};


  useEffect(() => {
    
    // Filter the tasks based on the selected category
    const filtered = tasksList.filter(task => task.tcategory === selectedCategory);
    setFilteredTasks(filtered.map(task => ({ ...task, favoriteCount: 0 })));
  }, [selectedCategory, tasksList]);



  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleFavoriteClick = (taskId) => {
    setFilteredTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, favoriteCount: task.favoriteCount + 1 };
        }
        return task;
      });
    });
  };

  const filterTasksByCategory = () => {
    if (selectedCategory === "All") {
      return tasksList;
    }
    return tasksList.filter(task => task.category === selectedCategory);
  };
  

  return (
    <Layout>
     <CourseTryui />
 
    <Container fluid id="corss">
      <Tabs 
        value={selectedCategory}
        onChange={(event, newValue) => handleCategoryFilter(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Category Tabs"
        style={{ position:'relative',bottom:'8rem',left:'7rem'}}
      >
        <Tab label="All" value="All" />
        {categories.map((category) => (
          <Tab style={{fontWeight:'800',fontSize:'0.9rem',color:'#66023b'}}
            key={category.category_id}
            label={category.category}
            value={category.category}
          />
        ))}
      </Tabs>
        <ImageList sx={{ width: "100%",position:'relative',bottom:'4rem' }} cols={3} gap={16}>
          {filterTasksByCategory().map((task) => (
            <ImageListItem key={task.id} sx={{ width: '350px', marginBottom: '20px',height:'200px' }}>
              <Card sx={{ width: '100%', height: '100%', maxWidth: '150px', maxHeight: '200px' }} key={task.id}>
                <CardMedia>
                  <img src={`http://localhost:5000/${task.imageurl}`} alt="Course" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    <b style={{ fontWeight: '1000', fontSize: "1.5rem", fontFamily: 'serif',color:'#66023b' }}>{task.c_title}</b>
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div" textAlign="justify" style={{ color: '#949292' }}>
                    {task.c_desc}
                  </Typography>
                  <span><Link onClick={openModal} style={{color:'#66023b'}}>Enquiry Now<ArrowRightAltIcon/></Link></span>
                  <div className="icon-wrapper">
                    <hr></hr>
                    <img style={{ width: '2rem', position: 'relative', top: '1rem', left: '0.5rem' }} src="https://smartcliff.in/assets/images/duration.png" alt="In-depth Practical Training" />
                    <span style={{ fontSize: "1rem", position: 'relative', left: '1rem', fontWeight: '600', color: "#f2775e", top: '0.5rem' }}>Duration<br/><span style={{ color: '#949292',position:'relative',left:'2rem',bottom:'0.5rem '}}> {task.duration} Month</span></span>
                  </div>
                </CardContent>
       
              </Card>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <HomeEnquiryModal  open={isModalOpen} handleClose={closeModal} />
    </Layout>
  );
};

export default Reduxcourse;