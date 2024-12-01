import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
        <Route
          path='/myWebsite'
          component={() => {
            window.location.href = 'https://omarshalash.com';
            return null;
          }}
        />
        <Route exact path='/*' component={FourOFour} />
      </Switch>
    </Router>
  );
}

export default App;
