import React from 'react';
import Hero from './hero/Hero';
import Skills from './skills/Skills';
import Footer from './footer/Footer';
import Container from './layout/Container';
import ScrollToTopButton from './components/ScrollToTopButton';
import Experience from './experience/Experience';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  return (
    <>
      <LanguageSwitcher />
      <main>
        <Hero />
        <Container>
          <Skills />
        </Container>
        <Container>
          <Experience />
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
      <ScrollToTopButton />
    </>
  );
};

export default App;
