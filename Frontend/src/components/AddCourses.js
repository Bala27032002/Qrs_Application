import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import ImageIcon from '@mui/icons-material/Image';

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [courses, setCourses] = useState([]);
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/category");
      if (Array.isArray(response.data)) {
        setCategories(response.data);
        console.log("Fetched categories:", response.data);
      } else {
        console.error("Invalid categories data:", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/courses");
      setCourses(response.data);
      console.log("UI fetching");
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const validateTitle = () => {
    const regex = /^[a-zA-Z\-,.\/\\";!\s]+$/;
    return regex.test(title);
  };

  const validateDescription = () => {
    const regex = /^[a-zA-Z\-,.\/\\";!\s]+$/;
    return regex.test(description);
  };

  const validateImage = () => {
    if (image) {
      const supportedFormats = ["image/png", "image/jpeg", "image/jpg"];
      return supportedFormats.includes(image.type);
    }
    return false;
  };

  const validateDuration = () => {
    const regex = /^[a-zA-Z\d\s]+$/;
    return regex.test(duration);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("c_title", title);
    formData.append("c_desc", description);
    formData.append("category", category);
    formData.append("duration", duration);
    formData.append("image", image);

    const validationErrors = {};

    if (!validateTitle()) {
      validationErrors.title = "Invalid course title";
    }

    if (!validateDescription()) {
      validationErrors.description = "Invalid course description";
    }

    if (!validateImage()) {
      if (!image) {
        validationErrors.image = "Please choose an image";
      } else {
        validationErrors.image =
          "Invalid image format (supported formats: png, jpg, jpeg)";
      }
    }

    if (!validateDuration()) {
      validationErrors.duration =
        "Invalid course duration (should be a positive integer)";
    }

    if (!category) {
      validationErrors.category = "Category is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/courses",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
      resetForm();
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDuration("");
    setCategory("");
    window.location.reload()
    setImage(null);
    setErrors({});
  };

  const handleInputChange = (fieldName) => (event) => {
    const newErrors = { ...errors };
    if (newErrors[fieldName]) {
      newErrors[fieldName] = null;
      setErrors(newErrors);
    }
    switch (fieldName) {
      case "title":
        setTitle(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "duration":
        setDuration(event.target.value);
        break;
      case "category":
        setCategory(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <Container className="my-4">
      {formVisible && (
        <Col xs={12} md={8} className="mx-auto">
          <div
            className="form-container"
            style={{ position: "relative" }}
          >
            <h4
              className="font-weight-bold"
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
                textAlign: "center",
                fontFamily: "serif",
                position: "relative",
                bottom: "1rem",
              }}
            >
              Course Management
            </h4>

            <Form
              onSubmit={handleSubmit}
              className="form"
              style={{ width: "25rem" }}
            >
              <Row>
                <Col xs={12}>
                  <Form.Group controlId="title">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                      type="text"
                      value={title}
                      onChange={handleInputChange("title")}
                      isInvalid={errors.title}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.title}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="description">
                    <Form.Label>Course Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={description}
                      onChange={handleInputChange("description")}
                      isInvalid={errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="imageurl">
                    <Form.Label>Course Image</Form.Label>
                    <div>
                      <label className="btn btn-secondary mb-3">
                        <ImageIcon /> Choose Image
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={handleImageUpload}
                        />
                      </label>

                      <Form.Text
                        className="text-muted"
                        style={{ marginLeft: "7px", color: "white" }}
                      >
                        Accepts image formats (jpg, jpeg, png, gif, etc.)
                        (Maximum file size: 5MB)
                      </Form.Text>
                    </div>
                    {errors.image && (
                      <div className="invalid-feedback d-block">
                        {errors.image}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="duration">
                    <Form.Label>Course Duration</Form.Label>
                    <Form.Control
                      type="text"
                      value={duration}
                      onChange={handleInputChange("duration")}
                      isInvalid={errors.duration}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.duration}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      value={category}
                      onChange={handleInputChange("category")}
                      isInvalid={errors.category}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option
                          key={category.category_id}
                          value={category.category}
                        >
                          {category.category}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.category}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                type="submit"
                className="mt-3"
                style={{ backgroundColor: "rgb(73, 113, 116)" }}
              >
                Add Course
              </Button>
            </Form>
          </div>
        </Col>
      )}
    </Container>
  );
}

export default AddCourse;
