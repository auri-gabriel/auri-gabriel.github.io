import React from 'react';
import Hero from './hero/Hero';
import Skills from './skills/Skills';
import Footer from './footer/Footer';
import Container from './layout/Container';

const App = () => {
  return (
    <Container>
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </Container>
  );
};

export default App;
