import React from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1 className="text-center mb-4">Welcome to Springdale Public School</h1>
      <p className="text-center lead">Where we nurture young minds for a brighter future.</p>
      
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/sports_day.jpg"
            alt="Annual Sports Day"
          />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/science_exhibition.jpg"
            alt="Science Exhibition"
          />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/cultural_fest.jpg"
            alt="Cultural Fest"
          />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                Learn about our history, vision, and mission.
              </Card.Text>
              <Button variant="primary" href="/about">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Admissions</Card.Title>
              <Card.Text>
                Find information about our admission process and apply online.
              </Card.Text>
              <Button variant="primary" href="/admissions">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>News & Events</Card.Title>
              <Card.Text>
                Stay updated with the latest news and upcoming events.
              </Card.Text>
              <Button variant="primary" href="/news">View All</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;