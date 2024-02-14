import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Modal } from "react-bootstrap";
import UpdateScheduleForm from "./UpdateScheduleForm";
const TrainingScheduleTable = (props) => {
  const [schedules, setSchedules] = useState([]);
  const [editSchedule, setEditSchedule] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Trainingschedule");
        setSchedules(response.data);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };

    fetchSchedules();
  }, [props.updateUI]); 

  const deleteShcdule = (taskId) => {
    axios
      .delete(`http://localhost:5000/Trainingschedule/${taskId}`)
      .then((res) => {
        console.log("Task deleted successfully:", res.data);
        // Trigger UI update by changing the updateUI state in the parent component
        props.setUpdateUI((prevState) => !prevState);
      })
      .catch((error) => {
        console.error("Failed to delete task:", error);
      });
  };
  const handleEditClick = (schedule) => {
    setEditSchedule(schedule);
  };

  const handleFormClose = () => {
    setEditSchedule(null);
  };

  const handleFormSubmit = () => {
    setEditSchedule(null);
    props.setUpdateUI((prevState) => !prevState);
  };
  const enq_name = localStorage.getItem('enq_name');
  const enq_email = localStorage.getItem('enq_email');
  

  const renderTooltip = (enqName, enqEmail) => (
    <Tooltip id="tooltip">
      <strong>Name:</strong> {enq_name} <br />
      <strong>Email:</strong> {enq_email}
    </Tooltip>
  );
  
  return (
    <>
    <Table striped bordered hover style={{marginTop:'4rem',width:'90%'}}>
      <thead>
        <tr>
          <th>Trainer Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Duration</th>
          <th>Action</th> 

        </tr>
      </thead>
      <tbody>
        {schedules.map((schedule, index) => (
          <tr key={index}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip(schedule.personName, schedule.personEmail)}
            >
              <td>{schedule.trainerName}</td>
            </OverlayTrigger>
            <td>{schedule.date}</td>
            <td>{schedule.time}</td>
            <td>{schedule.location}</td>
            <td>{schedule.duration}</td>
            <td>
                       <Button variant="primary" className="my-3" onClick={() => handleEditClick(schedule)} style={{background:'white',marginRight:'5px'}}>
                  <EditIcon style={{color:'#78104a'}} />
                </Button>
                  <Button
  style={{ backgroundColor: "#408687", color: 'white' }}
  variant="primary"
  onClick={() => deleteShcdule(schedule.Training_id)}>
  <DeleteIcon />
</Button>

                  </td>
          </tr>
        ))}
      </tbody>
    </Table>
      {editSchedule && (
        <UpdateScheduleForm
          schedule={editSchedule}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}
      </>
  );
};

export default TrainingScheduleTable;
