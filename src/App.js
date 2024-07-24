import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';

// Lazy load components
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Academics = lazy(() => import('./Components/Academics'));
const Admissions = lazy(() => import('./Components/Admissions'));
const Faculty = lazy(() => import('./Components/Faculty'));
const Students = lazy(() => import('./Components/Students'));
const Gallery = lazy(() => import('./Components/Gallery'));
const Contact = lazy(() => import('./Components/Contact'));

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <Suspense fallback={<div className="text-center"><Spinner animation="border" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}

export default App;