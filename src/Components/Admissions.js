import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', phone: '', grade: '' });
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Admissions</h1>

      <h2>Admission Process</h2>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>

      <h3>Important Dates</h3>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>

      <h3 className="mt-4">Admission Enquiry Form</h3>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Your enquiry has been submitted successfully. We will contact you soon.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Grade Applying For</Form.Label>
          <Form.Control as="select" name="grade" value={formData.grade} onChange={handleChange} required>
            <option value="">Select Grade</option>
            <option value="1-5">Grade 1-5</option>
            <option value="6-8">Grade 6-8</option>
            <option value="9-10">Grade 9-10</option>
            <option value="11-12">Grade 11-12</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Enquiry
        </Button>
      </Form>
    </Container>
  );
};

export default Admissions;