import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';

// Containers
import AttendeeForm from './containers/attendeeForm/AttendeeForm';
import AttendiesList from './containers/attendiesList/AttendiesList';

const App = () => (
  <Router>
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={AttendiesList} />
      <Route path="/add" component={AttendeeForm} />
    </div>
  </Router>
);

export default App;
