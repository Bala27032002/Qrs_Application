import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from 'axios';

const UpdateCategory = (props) => {
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (props.selectedTask && Object.keys(props.selectedTask).length !== 0) {
      setCategory(props.selectedTask.category);
      setId(props.selectedTask.Category_id);
    }
  }, [props.selectedTask]);

  const updateCategory = () => {
    props.onHide();
    axios
      .put(`http://localhost:5000/category/${id}`, { category })
      .then((res) => {
        console.log("Category updated successfully:", res.data);
        props.setUpdateUI(prevState => !prevState);
      })
      .catch((error) => {
        console.error("Failed to update category:", error);
      });
  };
  


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{width:'40rem' ,justifyContent:'center',marginLeft:'20rem',marginTop:'2rem'}}
      // style={{ backgroundColor: "#66023b", color: "white" }}
    >
      <Modal.Header closeButton >
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#66023b",color:'white',width:'40rem' }}>
        <Form style={{ width: "70%", margin: "0 auto" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Category Name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#66023b" }}>
        <div className="text-end">
          <Button
            variant="primary"
            type="submit"
            onClick={updateCategory}
            style={{ backgroundColor: "white", color: "#66023b" }}
          >
            Sumbit
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateCategory;
