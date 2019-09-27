import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import MotorcycleList from './components/MotorcycleList';
import MotorcycleForm from './components/MotorcycleForm';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/motorcycles" component={MotorcycleList} />
        <Route path="/motorcycle" component={MotorcycleForm} />
      </div>
    </Router>
  );
}

export default App;
