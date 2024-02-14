import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

const MyVerticallyCenteredModal = ({ show, onHide, course, onUpdate }) => {
  const [c_title, setTitle] = useState(course ? course.c_title : "");
  const [c_desc, setDescription] = useState(course ? course.c_desc : "");
  const [duration, setDuration] = useState(course ? course.duration : "");
  const [category, setCategory] = useState(course ? course.category : "");
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(course ? course.imageurl || "" : "");

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/category");
      setCategories(response.data); // Always set categories even if it's an empty array
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const updateCourse = async (e) => {
    e.preventDefault();
    console.log("Updating course...");
    
    try {
      const formData = new FormData();
      formData.append("c_title", c_title);
      formData.append("c_desc", c_desc);
      formData.append("duration", duration);
      formData.append("category", category);
    
      if (image instanceof File) {
        formData.append("image", image);
      }
  
      console.log("Form Data:", formData);
    
      const response = await axios.put(
        `http://localhost:5000/courses/${course.c_id}`,
        formData,  // Send the FormData object
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      console.log("Course updated successfully.");
      
      // Close the modal
      onHide();

      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Update Course <span style={{color:"red",fontSize:'15px'}}>(compulsory Update is Image Field *)</span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Course Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Title"
              value={c_title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Description"
              value={c_desc}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="imageurl">
            <Form.Label>Course Image <span style={{color:'red'}}> *</span></Form.Label>
            <div>
              <label className="btn btn-secondary mb-3">
                Choose Image
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </label>
              <Form.Text className="text-muted">
                Accepts image formats (jpg, jpeg, png, gif, etc.)
                <br />
                Maximum file size: 5MB
              </Form.Text>
            </div>
            {errors.image && (
              <div className="invalid-feedback">{errors.image}</div>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicDuration">
            <Form.Label>Course Duration</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="category" style={{ marginBottom: "10px" }}>
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.category_id} value={category.category}>
                  {category.category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
          <Button variant="primary" type="submit" onClick={updateCourse}>
            Update Course
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
