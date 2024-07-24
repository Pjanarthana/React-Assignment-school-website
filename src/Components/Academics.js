import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Academics = () => {
  const curricula = [
    {
      level: 'Primary (Grades 1-5)',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education']
    },
    {
      level: 'Secondary (Grades 6-10)',
      subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education', 'Art']
    },
    {
      level: 'Senior Secondary (Grades 11-12)',
      streams: [
        {
          name: 'Science Stream',
          subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'English']
        },
        {
          name: 'Commerce Stream',
          subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English']
        }
      ]
    }
  ];

  return (
    <Container>
      <h1 className="text-center mb-4">Academics at Springdale</h1>
      
      <h2 className="mb-3">Curriculum</h2>
      {curricula.map((curriculum, index) => (
        <Card key={index} className="mb-4">
          <Card.Header as="h3">{curriculum.level}</Card.Header>
          <Card.Body>
            {curriculum.subjects ? (
              <ListGroup>
                {curriculum.subjects.map((subject, subIndex) => (
                  <ListGroup.Item key={subIndex}>{subject}</ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              curriculum.streams.map((stream, streamIndex) => (
                <div key={streamIndex}>
                  <h4>{stream.name}</h4>
                  <ListGroup>
                    {stream.subjects.map((subject, subIndex) => (
                      <ListGroup.Item key={subIndex}>{subject}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ))
            )}
          </Card.Body>
        </Card>
      ))}

      <Row className="mb-4">
        <Col md={6}>
          <h2>Teaching Methodologies</h2>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles. Our approach includes:</p>
          <ul>
            <li>Interactive classroom sessions</li>
            <li>Project-based learning</li>
            <li>Experiential learning through field trips and experiments</li>
            <li>Use of educational technology and digital resources</li>
          </ul>
        </Col>
        <Col md={6}>
          <h2>Educational Resources</h2>
          <p>Our school provides access to a wide range of educational resources:</p>
          <ul>
            <li>Digital classrooms with interactive whiteboards</li>
            <li>Well-equipped science and computer labs</li>
            <li>Extensive library with both physical and digital collections</li>
            <li>Online learning platforms for additional practice and resources</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Academics;