import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Overlay } from './components/Overlay';
import { Resume } from './components/resume/Resume';

function App() {
  return (
    <Router>
      <Overlay />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
