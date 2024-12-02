import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Overlay } from './components/Overlay';
import { Resume } from './components/resume/Resume';
import { FourOFour } from './components/other/FourOFour';
import ScrollToTop from './components/other/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Overlay />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route
          path='/myWebsite'
          element={() => {
            window.location.href = 'https://omarshalash.com';
            return null;
          }}
        />
        <Route path='/*' element={<FourOFour />} />
      </Routes>
    </Router>
  );
}

export default App;
