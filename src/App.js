import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Containers
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="events" />
      </div>
    </Router>
  );
}

export default App;
