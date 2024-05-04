import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import Increment from './increment.jsx'
import './App.css';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import FormSubmitted from './FormSubmitted.jsx'; // Import the FormSubmitted component

import {Discl} from "./discl.jsx"

function Input() {
  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = uuidv4(); // Generate unique user ID
    setFormData({
      ...formData,
      userId: userId
    });

    console.log("User ID:", userId); // Print user ID to console
    console.log("Form Data:", formData); // Print form data to console

    // Save data to local storage
    localStorage.setItem(userId, JSON.stringify(formData));

    // Alternatively, you can dispatch an action to save data to Redux Toolkit (RTK) store
    // dispatch(saveFormData(formData));

    alert('Form submitted successfully!');
    setFormSubmitted(true); // Update state to indicate form submission

    // Navigate to the FormSubmitted component after form submission
    navigate('/form-submitted');
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!formSubmitted) {
        e.preventDefault();
        e.returnValue = ''; // Prevent closing the tab/window without confirmation
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [formSubmitted, navigate]);

  return (
    <>
    <div>
        <Discl />
        <Increment />
       
       



       
    </div>
      <div className="outerbox">
        <div className="input-box">
          <h1>React Form</h1>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <p htmlFor="name">Name</p>
                <input type="text" className="inputbox" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="inputs">
                <p htmlFor="">Email</p>
                <input type="email" className="inputbox" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="inputs">
                <p htmlFor="">Phone</p>
                <input type="tel" className="inputbox" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="inputs">
                <p htmlFor="">Description</p>
                {/* Integrating RichTextEditor component for description field */}
                <RichTextEditor value={formData.description} onChange={(value) => setFormData({...formData, description: value})} />
              </div>
              <div className="submit-button"><button className="submit" type="submit">Submit</button>
              </div>
            </form>
          ) : (
            <FormSubmitted />
          )}
        </div>
      </div>
    </>
  )
}

const RichTextEditor = ({ value, onChange }) => {
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
  ];

  const modules = {
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      handlers: {},
    },
  };

  return (
    <div className="rich-text-editor">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Input;