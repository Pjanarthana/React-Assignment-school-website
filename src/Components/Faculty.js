import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Faculty = () => {
  const facultyMembers = [
    { name: 'Dr. John Doe', position: 'Principal', color: '4A90E2' },
    { name: 'Prof. Jane Smith', position: 'Vice Principal', color: '50E3C2' },
    { name: 'Mr. Robert Johnson', position: 'Head of Sciences', color: 'F5A623' },
    { name: 'Ms. Emily Brown', position: 'Head of Arts', color: 'D0021B' },
  ];

  return (
    <Container>
      <h1 className="text-center mb-4">Our Faculty</h1>
      <Row>
        {facultyMembers.map((faculty, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <div className="text-center pt-3">
                <Image
                  src={`https://placehold.co/150x150/${faculty.color}/FFFFFF.png?text=${encodeURIComponent(faculty.name.split(' ')[0][0] + faculty.name.split(' ')[1][0])}`}
                  roundedCircle
                  width={150}
                  height={150}
                  alt={`${faculty.name}'s portrait`}
                />
              </div>
              <Card.Body>
                <Card.Title>{faculty.name}</Card.Title>
                <Card.Text>{faculty.position}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Faculty;