import React from 'react';
import Hero from './hero/Hero';
import Skills from './skills/Skills';
import Footer from './footer/Footer';
import Container from './layout/Container';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  return (
    <Container>
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
      <ScrollToTopButton />
    </Container>
  );
};

export default App;
