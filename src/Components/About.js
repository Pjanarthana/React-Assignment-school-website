import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <h1 className="text-center mb-4">About Springdale Public School</h1>
      
      <Row className="mb-4">
        <Col md={6}>
          <h2>Our History</h2>
          <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students for over three decades.</p>
        </Col>
        <Col md={6}>
          <h2>Vision & Mission</h2>
          <p><strong>Vision:</strong> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          <p><strong>Mission:</strong> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Principal's Message</Card.Title>
          <Card.Text>
            "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated faculty and state-of-the-art facilities provide an ideal environment for learning and growth."
          </Card.Text>
          <Card.Footer>
            <small className="text-muted">John Doe, Principal</small>
          </Card.Footer>
        </Card.Body>
      </Card>

      <h2 className="mb-3">Infrastructure and Facilities</h2>
      <Row>
        {['State-of-the-art science and computer labs', 'Spacious and well-equipped classrooms', 'Library with a vast collection of books and digital resources', 'Sports facilities including a playground, gymnasium, and swimming pool'].map((facility, index) => (
          <Col md={6} key={index}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Text>{facility}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;