import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import DockerTutorial from './docker/DockerTutorial';
import QwiklabTutorial from './qwikilab/QwiklabTutorial';

export function App() {
  return (
    <div>
      <Router>
        <Route path="/docker" component={DockerTutorial} />
        <Route path="/qwiklab" component={QwiklabTutorial} />
      </Router>
    </div>
  );
}

export default App;
