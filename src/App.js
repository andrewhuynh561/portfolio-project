import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact';



function App() {
  return (
    <div >
      <NavBar/>
      <SocialLinks/>
      <Home/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>

    </div>
  );
}

export default App;
