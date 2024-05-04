import React, { useState, useEffect } from 'react';
import './FormSubmitted.css'; 
import { Discl2 } from './discl';
function FormSubmitted() {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState(null);
  const [userIds, setUserIds] = useState([]);

  useEffect(() => {
    // Retrieve all user IDs from local storage
    const keys = Object.keys(localStorage);
    setUserIds(keys.filter(key => key !== "debugger"));
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Retrieve data from local storage based on the entered user ID
    const userData = JSON.parse(localStorage.getItem(userId));
    setFormData(userData);
  };

  return (
    <div>
      <Discl2 />
    <div className="container">
      
      <div className="left-panel">
        <h3 className="user-ids-heading">All User IDs:</h3>
        <ul className="user-ids-list">
          {userIds.map(id => (
            <li key={id} className="user-id">{id}</li>
          ))}
        </ul>
      </div>
      <div className="right-panel">
        <h2 className="form-heading">Retrieve Form Data</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="userIdInput" className="form-label">Enter User ID:</label>
          <input 
            type="text" 
            id="userIdInput" 
            value={userId} 
            onChange={handleInputChange} 
            required 
            className="form-input"
          />
          <button type="submit" className="form-button">Retrieve Data</button>
        </form>
        {formData && (
          <div className="form-data-container">
            <h3 className="form-data-heading">User ID: {formData.userId}</h3>
            <p className="form-data">Name: {formData.name}</p>
            <p className="form-data">Email: {formData.email}</p>
            <p className="form-data">Phone: {formData.phone}</p> {/* Display phone number */}
            <p className="form-data">Description:</p>
            <div className="form-description" dangerouslySetInnerHTML={{ __html: formData.description }} />
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default FormSubmitted;
