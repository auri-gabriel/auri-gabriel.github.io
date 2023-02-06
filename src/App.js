import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Layout/Container';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <Skills />
        <Footer />
      </Container>
    </>
  );
};

export default App;
