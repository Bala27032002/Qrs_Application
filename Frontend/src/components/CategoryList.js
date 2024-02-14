import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import axios from 'axios';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateCategory from "./UpdateCategory";
import Addcategory from "./AddCategory";

const CategoryList = (props) => {
  const [category, setcategory] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const [updateUI, setUpdateUI] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/category");
        setcategory(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchTasks();
    }, []);
const updateTask = (task) => {
  console.log("update Task");
  setSelectedTask(task);
  setModalShow(true);
};

const deleteCategory = (categoryId) => {
    axios
      .delete(`http://localhost:5000/category/${categoryId}`)
      .then((res) => {
        console.log("Category deleted successfully:", res.data);
        window.location.reload()
        props.setUpdateUI((prevState) => !prevState);
      })
      .catch((error) => {
        console.error("Failed to delete category:", error);
      });
  };
const exportToExcel = () => {
    const csvData = category.map((task) => {
      return [
        task.category
      ];
    });
  
    const csvContent = csvData.map((row) => row.join(",")).join("\n");
    const csvBlob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  
    const csvFileName = "tasks.csv";
    
    const csvLink = document.createElement("a");
    csvLink.href = URL.createObjectURL(csvBlob);
    csvLink.setAttribute("download", csvFileName);
    document.body.appendChild(csvLink);
    csvLink.click();
    document.body.removeChild(csvLink);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

const [modalShow,setModalShow] = useState(false)

  return (
    <>
     <Button
  // variant="success"
  onClick={exportToExcel}
  style={{ margin: "30px auto 20px", display: "block" ,position:'relative',left:'27rem',top:'3rem',background:'#408687',color:"black",fontSize:'1rem',fontWeight:'600'}}
>
  Export to Excel
</Button>
    <Button
        variant="outlined"
        // ... (button styles)
        onClick={openModal}  style={{background:'#408687',color:"black",fontFamily:'serif',fontSize:'1rem',fontWeight:'600',position:'relative',right:'3rem'}}// Open the AddCourse modal when this button is clicked
      >
        Add Category
      </Button>
      <Table  style={{marginTop:'8rem',width:'40rem',position:'relative',right:'-12rem',bottom:'6rem'}}>
        <thead>
          <tr className="">
            <th>#</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {category &&
            category.map((task, index) => {
              return (
                <tr className="text-center11" key={index}>
                  <td>{index + 1}</td>
                  <td>{task.category}</td>
                  {/* <td>{task.description}</td> */}
                 
              
                 
                  <td>
                  <Button
  variant="primary"
  className="my-3"
  onClick={() => updateTask(task)}
  style={{ backgroundColor: "#d3e3e3",color:'black' }}
>
  <EditIcon style={{ color: '#78104a' }} />
</Button>
                    <Button
  style={{ backgroundColor: "#408687",color:'white' }}
  variant="primary"
  onClick={() => deleteCategory(task.Category_id)} // Use task.Category_id
>
  <DeleteIcon />
</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <UpdateCategory
  show={modalShow}
  onHide={() => {
    setModalShow(false);
    setSelectedTask({}); // Reset the selected task when modal is closed
  }}
  selectedTask={selectedTask}
  setUpdateUI={props.setUpdateUI} // Pass the setUpdateUI function from the parent component
/>
<Modal show={isModalOpen} onHide={closeModal}>
        <div className="modal-cont">
          <Addcategory onCloseModal={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default CategoryList;