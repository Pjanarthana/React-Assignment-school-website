import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const images = [
    { src: '/images/sports_day.jpg', alt: 'Sports Day', category: 'events' },
    { src: '/images/science_exhibition.jpg', alt: 'Science Exhibition', category: 'academic' },
    { src: '/images/cultural_fest.jpg', alt: 'Cultural Fest', category: 'events' },
    { src: '/images/classroom.jpg', alt: 'Classroom', category: 'facilities' },
    { src: '/images/library.jpg', alt: 'Library', category: 'facilities' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <Container>
      <h1 className="text-center mb-4">Springdale Public School Gallery</h1>
      
      <div className="text-center mb-4">
        <Button variant={filter === 'all' ? 'primary' : 'outline-primary'} onClick={() => setFilter('all')} className="me-2">All</Button>
        <Button variant={filter === 'events' ? 'primary' : 'outline-primary'} onClick={() => setFilter('events')} className="me-2">Events</Button>
        <Button variant={filter === 'academic' ? 'primary' : 'outline-primary'} onClick={() => setFilter('academic')} className="me-2">Academic</Button>
        <Button variant={filter === 'facilities' ? 'primary' : 'outline-primary'} onClick={() => setFilter('facilities')}>Facilities</Button>
      </div>

      <Row>
        {filteredImages.map((image, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={image.src} alt={image.alt} />
              <Card.Body>
                <Card.Title>{image.alt}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;