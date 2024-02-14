// EnquiryUpdate.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EnquiryUpdate = ({ show, onHide, selectedCourse, fetchEnquiry }) => {
  const [updatedEnquiry, setUpdatedEnquiry] = useState(selectedCourse);

  useEffect(() => {
    setUpdatedEnquiry(selectedCourse);
  }, [selectedCourse]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEnquiry({ ...updatedEnquiry, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/enquriy/${updatedEnquiry.enq_id}`, updatedEnquiry);
      onHide(); // Close the modal after updating
      fetchEnquiry(); // Refresh the enquiry list after update
    } catch (error) {
      console.error('Error updating enquiry:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Enquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="enq_name"
              value={updatedEnquiry ? updatedEnquiry.enq_name : ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="enq_email"
              value={updatedEnquiry ? updatedEnquiry.enq_email : ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="enq_mobile"
              value={updatedEnquiry ? updatedEnquiry.enq_mobile : ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAreaOfInterest">
            <Form.Label>Area Of Interest</Form.Label>
            <Form.Control
              type="text"
              name="area_interest"
              value={updatedEnquiry ? updatedEnquiry.area_interest : ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EnquiryUpdate;
