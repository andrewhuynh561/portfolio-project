import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import SocialLinks from './components/SocialLinks'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education';
import Contact from './components/Contact';



function App() {
  return (
    <div >
      <NavBar/>
      <SocialLinks/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>

    </div>
  );
}

export default App;
