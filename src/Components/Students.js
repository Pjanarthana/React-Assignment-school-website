import React from 'react';
import { Container, Row, Col, Card, ListGroup, Table } from 'react-bootstrap';

const Students = () => {
  const activities = [
    'Music', 'Dance', 'Drama', 'Art', 'Sports', 'Robotics', 'Debate Club', 'Science Club'
  ];

  const clubs = [
    'Literary Society', 'Environmental Club', 'Astronomy Club', 'Coding Club'
  ];

  const achievements = [
    'John Smith - National Level Math Olympiad Winner',
    'Sarah Lee - Gold Medalist in State Swimming Championship',
    'Tech Innovators Club - Winners of Inter-School Robotics Competition'
  ];

  const studentCouncil = [
    { name: 'Amy Parker', position: 'President', grade: '12' },
    { name: 'Rajiv Mehta', position: 'Vice President', grade: '11' },
    { name: 'Lisa Wong', position: 'Secretary', grade: '10' }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Student Life at Springdale</h1>

      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Header as="h2">Extracurricular Activities</Card.Header>
            <Card.Body>
              <ListGroup>
                {activities.map((activity, index) => (
                  <ListGroup.Item key={index}>{activity}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header as="h2">Clubs and Societies</Card.Header>
            <Card.Body>
              <ListGroup>
                {clubs.map((club, index) => (
                  <ListGroup.Item key={index}>{club}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Header as="h2">Student Achievements</Card.Header>
        <Card.Body>
          <ListGroup>
            {achievements.map((achievement, index) => (
              <ListGroup.Item key={index}>{achievement}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header as="h2">Student Council</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {studentCouncil.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.position}</td>
                  <td>{member.grade}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Row className="mt-4">
        <Col>
          <h2>Life at Springdale</h2>
          <p>
            At Springdale Public School, we believe in nurturing well-rounded individuals. Our students are encouraged to participate in a wide range of extracurricular activities and join various clubs that align with their interests. These opportunities help students develop leadership skills, teamwork, and pursue their passions outside of the classroom.
          </p>
          <p>
            Our students have excelled in various fields, bringing laurels to the school through their achievements in academics, sports, and cultural activities. The student council plays a crucial role in organizing events, representing student interests, and fostering a sense of community within the school.
          </p>
          <p>
            We take pride in providing a supportive and engaging environment where every student can thrive and reach their full potential.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Students;