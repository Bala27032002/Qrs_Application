// TrainingScheduleForm.js
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const TrainingScheduleForm = ({ show, onHide, enquiryId, fetchEnquiry }) => {
  const [trainerName, setTrainerName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");

  const handleCreateSchedule = async () => {
    try {
      const response = await axios.post("http://localhost:5000/Trainingschedule", {
        enquiryId,
        trainerName,
        date,
        time,
        location,
        duration
      });
      console.log("Schedule created successfully:", response.data);
      fetchEnquiry(); // Refresh the enquiry list after creating a schedule
      onHide(); // Close the modal
    } catch (error) {
      console.error("Error creating schedule:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Training Schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="trainerName">
            <Form.Label>Trainer Name</Form.Label>
            <Form.Control
              type="text"
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="duration">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateSchedule}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TrainingScheduleForm;
