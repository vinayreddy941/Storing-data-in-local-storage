import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Input from './input';
import FormSubmitted from './FormSubmitted';
import SignIn from './Signin'; // Import SignIn component

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* Route for SignIn component */}
          <Route path="/input" element={<Input />} /> {/* Route for Input component */}
          <Route path="/form-submitted" element={<FormSubmitted />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
