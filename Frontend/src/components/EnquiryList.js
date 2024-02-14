import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import EnquiryUpdate from './EnquiryUpdate';
import axios from 'axios';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TrainingScheduleForm from "./TrainingScheduleForm";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const EnquiryList = (props) => {
  const [enquiry, setEnquiry] = useState([]);
const [modalShow, setModalShow] = useState(false);
const [selectedCourse, setSelectedCourse] = useState(null);
const [trainingModalShow, setTrainingModalShow] = useState(false);
const [selectedEnquiryName, setSelectedEnquiryName] = useState("");
const [selectedEnquiryEmail, setSelectedEnquiryEmail] = useState("");
  const [selectedEnquiryId, setSelectedEnquiryId] = useState(null);
  const fetchEnquiry = async () => {
      try {
        const response = await axios.get("http://localhost:5000/enquriy");
        setEnquiry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchEnquiry();
    }, []);
    const updateCourse = (course) => {
      setSelectedCourse(course);
      setModalShow(true);
    };
const exportToExcel = () => {
  const csvData = enquiry.map((enquiry) => {
    return [
      enquiry.enq_name,
      enquiry.enq_name,
      enquiry.enq_mobile,
      enquiry.enq_mobile,
      enquiry.area_interest
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
    setModalShow(false); 
    fetchEnquiry(); 
  } catch (error) {
    console.error("Error updating course:", error);
  }
};

const deleteEnquiry = (taskId) => {
  axios
    .delete(`http://localhost:5000/enquriy/${taskId}`)
    .then((res) => {
      console.log("Task deleted successfully:", res.data);
      window.location.reload()
      props.setUpdateUI((prevState) => !prevState);
    })
    .catch((error) => {
      console.error("Failed to delete task:", error);
    });
};
const handleTrainingSchedule = (enquiryId, name, email) => {
  setSelectedEnquiryId(enquiryId);
  localStorage.setItem('enq_name', name);
  localStorage.setItem('enq_email', email);
  setTrainingModalShow(true);
  setSelectedEnquiryName(name);
  setSelectedEnquiryEmail(email);
};

  return (
    <>
     <Button
  onClick={exportToExcel}
  style={{ margin: "30px auto 20px", display: "block" ,position:'relative',left:'27rem',top:'3rem',background:'#408687',color:"black",fontSize:'1rem',fontWeight:'600'}}
>
  Export to Excel
</Button>
      <Table  style={{marginTop:'8rem',width:'70rem',position:'relative',right:'3rem'}}>
        <thead>
          <tr className="">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone_No:</th>
            {/* */}
            <th>Area Of Interest</th>
            {/* <th>message</th>  */}
            <th>Action</th> 
            <th>Training Schedule</th>
          </tr>
        </thead>
        <tbody>
          {enquiry &&
            enquiry.map((enquiry, index) => {
              return (
                <tr className="text-center11" key={index}>
                  <td>{index + 1}</td>
                  <td>{enquiry.enq_name}</td>
                  <td>{enquiry.enq_email}</td>
                  <td>{enquiry.enq_mobile}</td>
                  <td>{enquiry.area_interest}</td>
                  {/* <td>{enquiry.enq_message}</td> */}
                 
                  <td>
                    <Button
                      variant="primary"
                      className="my-3"
                      onClick={() => updateCourse(enquiry)}style={{background:'white',marginRight:'5px'}}
                    >
                      
                      <EditIcon style={{color:'#78104a'}} />
                    </Button>
                    <Button style={{backgroundColor: "#408687",color:'white'}}  variant="primary" onClick={() => deleteEnquiry(enquiry.enq_id)}>
                      <DeleteIcon />
                    </Button>
                  </td>
                  <td>
                  <Button style={{position:'relative',top:'1rem'}}
                      variant="info"
                      onClick={() => handleTrainingSchedule(enquiry.enq_id, enquiry.enq_name, enquiry.enq_email)}
                    >
                      <CalendarMonthIcon />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

  

<EnquiryUpdate
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setSelectedCourse(null);
          fetchEnquiry(); // Refresh the enquiry list after closing modal
        }}
        selectedCourse={selectedCourse}
        fetchEnquiry={fetchEnquiry} // Pass the fetchEnquiry function to the modal
      />
       <TrainingScheduleForm
        show={trainingModalShow}
        onHide={() => {
          setTrainingModalShow(false);
          setSelectedEnquiryId(null);
          fetchEnquiry();
        }}
        enquiryId={selectedEnquiryId}
        enqName={selectedEnquiryName}
        enqEmail={selectedEnquiryEmail}
        fetchEnquiry={fetchEnquiry}
      />
      
    </>
  );
};

export default EnquiryList;