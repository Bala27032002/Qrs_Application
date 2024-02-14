import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom'; 

const Addcategory = ({ onUpdateTasks }) => {
  const [category, setCategory] = useState('');



  const url = 'http://localhost:5000/category';



  const validateForm = () => {
    const errors = {};

    if (!category) {
      errors.category = 'Course Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(category)) {
      errors.category = 'Course Name should only contain alphabets and spaces';
    }
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const formData = {
        category: category,
      };
  
      try {
        const response = await axios.post('http://localhost:5000/category', formData);
        console.log('Form submitted successfully:', response.data);
        window.location.reload()
        setCategory('');
      } catch (error) {
        console.error('Failed to submit form:', error);
      }
    }
  };
  
  return (
    <section className="add-courses-section">
    
        <div className="form-container" style={{ position: 'relative',left:'0.2rem' }}>
          <h4 style={{ fontFamily: 'serif', fontWeight: '700', alignItems: 'center', textAlign: 'center' }}>
            Add Category
         
          </h4>
          <br />
          <form className="form" style={{ width: '32rem', position: 'relative' }}>
            <label className="form-label">Enter Category</label>
            <input
              type="text"
              className="form-input"
              name="category"
              placeholder="category"
              value={category}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            
            <div style={{ textAlign: 'end' }}>
              <Button className="add-courses-button" type="submit" onClick={handleSubmit}>
                Add Category
              </Button>
            </div>
          </form>
        </div>
    
    </section>
  );
};

export default Addcategory;
