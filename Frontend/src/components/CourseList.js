import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import MyVerticallyCenteredModal from "./UpdateTask";
import "bootstrap-icons/font/bootstrap-icons.css";
import ExcelJS from "exceljs";
import AddIcon from '@mui/icons-material/Add';

import axios from "axios";
import AddCourse from "./AddCourses";
import './AddCourses.css'
import GetAppIcon from '@mui/icons-material/GetApp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CoursesList = ({ isCoursesUpdated, onCoursesUpdated }) => {
  const [courses, setCourses] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCourses();
    fetchCategories(); // Fetch categories when component mounts
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();

    if (isCoursesUpdated) {
      onCoursesUpdated();
    }
  }, [isCoursesUpdated]);
  const filteredCourses = selectedCategory === "All"
  ? courses
  : courses.filter(course => course.category === selectedCategory);


  const exportToExcel = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      const courses = response.data;
      console.log("Fetched Courses:", courses);

      if (Array.isArray(courses) && courses.length > 0) {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("CoursesList");

        // Add headers to the worksheet
        worksheet.columns = [
          { header: "S.No", key: "index" },
          { header: "c_title", key: "c_title" },
          { header: "Category", key: "category" },
          { header: "Duration", key: "duration" },
        ];

        // Add data rows to the worksheet
        courses.forEach((task, index) => {
          worksheet.addRow({
            index: index + 1,
            c_title: task.c_title,
            category: task.category,
            duration: task.duration,
          });
        });

        // Generate the Excel file as a buffer
        const buffer = await workbook.xlsx.writeBuffer();

        // Create a Blob and initiate the download
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "courses.xlsx";
        a.click();
        URL.revokeObjectURL(url);
        console.log("Download initiated successfully.");
      } else {
        console.error("No tasks to export to Excel.");
      }
    } catch (error) {
      console.error("Error occurred while exporting to Excel:", error);
    }
  }

  const handleCourseUpdate = async () => {
    if (!selectedCourse) {
      console.error("No course selected for update.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/courses/${selectedCourse.c_id}`,
        selectedCourse
      );
      console.log("Course updated successfully:", response.data);
      setModalShow(false); // Close the modal after updating
      fetchCourses(); // Refresh the course list after update
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  

  //modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateCourse = (course) => {
    setSelectedCourse(course);
    setModalShow(true);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  
  
  
  const deleteCourse = async (courseId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/courses/${courseId}`);
      setCourses((prevCourses) => prevCourses.filter((course) => course.c_id !== courseId));
      console.log("Deleted successfully!");
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const containerStyle = {
    backgroundsize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#d3e3e3'
  };


  return (
    <>
      <div className="App" style={containerStyle}>
        <Button
          className="button"
          style={{ margin: "30px auto 20px", display: "block", background: '#408687', color: "black", fontSize: '1rem', fontWeight: '600',position:'relative',right:'21.4rem',top:'3.7rem',fontFamily:'serif' }}
          onClick={exportToExcel}
        >
         <GetAppIcon/> Export to Excel
        </Button>
        </div>
        <Button
        variant="outlined"
        // ... (button styles)
        onClick={openModal} style={{background:'#408687',color:"black",fontFamily:'serif',fontSize:'1rem',fontWeight:'600',position:'relative'}}// Open the AddCourse modal when this button is clicked
      >
      <AddIcon/>  Add Course
      </Button>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <select
    value={selectedCategory}
    onChange={e => setSelectedCategory(e.target.value)}
    style={{
      background: '#408687',
      color: 'white',
      fontFamily: 'serif',
      fontSize: '1rem',
      fontWeight: '600',
      position: 'relative',
      right: '7rem',
      bottom:'3rem' // Move to the right side
    }}
  >
  <option value="All">All</option>
  {categories.map(category => (
    <option key={category.c_id} value={category.c_title}>
      {category.category}
    </option>
  ))}
</select>
</div>

      

      <div style={{ overflowX: 'auto', marginRight: '7rem' }}>
        <Table responsive striped bordered hover className="courses-table">
          <thead className="table-header">
            <tr className="text-center">
              <th>#</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Image URL</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={course._id} className="text-center">
                <td>{index + 1}</td>
                <td>{course.c_title}</td>
                <td>{course.duration} Month</td>
                <td style={{width:'5rem'}}>
                  {course.imageurl && (
                    <img
                      src={`http://localhost:5000/${course.imageurl}`}
                      alt={`Course ${course.c_id}`}
                      style={{ objectFit: "cover", height: "150px" }}
                    />
                  )}
                </td>
              <td style={{width:'10rem'}}>{course.category}</td>
              <td style={{width:'2rem'}}>
                <Button
                  className="mx-3"
                  onClick={() => updateCourse(course)}
                  style={{ marginBottom: "5px", backgroundColor: "#d3e3e3",color:'black' }}
                >
                 <EditIcon/>
                </Button>
                <Button style={{ backgroundColor: "#408687",color:'white' }}>
                  <DeleteIcon onClick={() => deleteCourse(course.c_id)}></DeleteIcon>
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
      </div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <div className="modal-cont">
          <AddCourse onCloseModal={closeModal} />
        </div>
      </Modal>
      {selectedCourse && (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            setSelectedCourse(null);
          }}
          course={selectedCourse}
        />
      )}
    </>
  );
};

export default CoursesList;