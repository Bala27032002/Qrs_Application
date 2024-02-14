    import React, { useState,useEffect } from 'react';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import TasksList from './CourseList';
    import EnquiryList from './EnquiryList';
    import axios from 'axios';
import ContactList from './ContactList';
// import { Button } from '@mui/material';
// import { Button, Modal } from 'react-bootstrap';
import { Modal ,Button, IconButton, Typography} from '@mui/material';
import AddCourses from './AddCourses';
import "./AddCourses.css";
import AdminTryUI from './AdminTryUI';
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Box } from '@mui/system';
import Addcategory from './AddCategory';
import CategoryList from './CategoryList';
import TrainingScheduleTable from './TrainingScheduleTable';

function AddminDashboard() {
        const navigate = useNavigate();
        const [anchorElNav, setAnchorElNav] = useState(null);
        const [selectedTab, setSelectedTab] = useState(0);
            const [updateUI, setUpdateUI] = useState(false);
            const [isModalOpen, setIsModalOpen] = useState(false); 
            const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);
            const [isUserFormOpen, setIsUserFormOpen] = useState(false);
            const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
            useEffect(() => {
              const storedTab = sessionStorage.getItem('selectedTab');
              if (storedTab !== null) {
                  setSelectedTab(parseInt(storedTab));
              }
          }, []);
    
          const handleTabChange = (event, newValue) => {
            setSelectedTab(newValue);
            // Store the selected tab index in sessionStorage
            sessionStorage.setItem('selectedTab', newValue);
        };
       
    //logout
    const handleCloseUserForm = () => {
      setIsUserFormOpen(false);
    };

    const handleLogoutConfirmationOpen = () => {
      setLogoutConfirmationOpen(true);
    };
  
    const handleLogoutConfirmationClose = () => {
      setLogoutConfirmationOpen(false);
    };
    
    const handleLogout = () => {
      handleLogoutConfirmationClose();
      
      // Clear session data
      sessionStorage.removeItem("authenticated");
      
      // Redirect to home page
      navigate("/"); 
    };

      const openModal = () => {
        setIsModalOpen(true);
      };
      
      const openCategoryModal = () => {
        setIsCategoryModalOpen(true);
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
        setIsCategoryModalOpen(false);
      };
          const handleCloseNavMenu = () => {
            setAnchorElNav(null);
          };
          
          const containerStyle={
            backgroundsize:'cover',
            backgroundRepeat:'no-repeat',
          
            backgroundColor:'#d3e3e3'
          }
        return (
        <div>
           <div className="App" style={containerStyle} >
            <AdminTryUI  text={"Admin Management"}/>
           
            <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white",position:'relative',bottom:'10rem' }}
                component="a"
                href="/"
              >
                Home 
              </Button>
              <Button
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white",position:'relative',bottom:'10rem',right:'1rem' }}
                component="a"
                href="/course"
              >
               / courses
              </Button>
              <h5
  style={{
    display: 'flex', // Adding flex display to align icon and text
    alignItems: 'center', // Aligning items vertically
    justifyContent: 'flex-end', // Aligning content to the right
    cursor: 'pointer',// Adding cursor style to indicate interactivity
    position :'relative',
    right:'2.3rem',
    top:'0.9' ,  
    bottom:'14rem',
    color:"white"
  }}
  onClick={handleLogoutConfirmationOpen}
>
  <LockIcon style={{ marginRight: '5px' ,color:'white'}} /> {/* Adding margin to the icon */}
  Logout
</h5>
<Modal open={isUserFormOpen} onClose={handleCloseUserForm}>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            maxHeight: "90%",
            width: "400px",
            height: "400px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

      
        </Box>
      </Modal>
      <Dialog
        open={logoutConfirmationOpen}
        onClose={handleLogoutConfirmationClose}
      >
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to logout?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutConfirmationClose}>Cancel</Button>
          <Button onClick={handleLogout} color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
             
            <Tabs value={selectedTab} onChange={handleTabChange} centered style={{background:'#408687',color:'white',position:'relative',top:'-12rem'}}>
            <Tab label="CourseManagement" style={{color:'white'}} />
            <Tab label="View Catogory" style={{color:'white'}} />
            <Tab label="Student" style={{color:'white'}} />
            <Tab label="Edit Schedule" style={{color:'white'}} />
            </Tabs>
            
            {selectedTab === 0 && <div style={{paddingLeft:"10%",position:'relative',bottom:'13.7rem'}}><TasksList  updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 1 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><CategoryList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 2 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><EnquiryList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 3 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><TrainingScheduleTable updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}

            <Modal open={isModalOpen} onClose={closeModal}>
  <div className="modal-cont">
    <AddCourses onCloseModal={closeModal} />
  </div>
</Modal>
<Modal open={isCategoryModalOpen} onClose={closeModal}>
  <div className="modal-cont">
    <Addcategory onCloseModal={closeModal} />
  </div>
</Modal>
        </div>
        </div>
        );
    }
    
    export default AddminDashboard;