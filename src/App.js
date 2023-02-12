import React from 'react';
import Hero from './hero/Hero';
import Skills from './skills/Skills';
import Footer from './footer/Footer';
import Container from './layout/Container';
import Contact from './contact/Contact';

const App = () => {
  return (
    <Container>
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </Container>
  );
};

export default App;
