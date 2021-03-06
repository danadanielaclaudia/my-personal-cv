import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import MyCv from './pages/MyCv';
import Hobby from './pages/Hobby';
import Architecture from './pages/Architecture';
import IT from './pages/IT';


function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/architecture" component={Architecture} />
          <Route exact path="/it" component={IT} />
          <Route exact path="/hobby" component={Hobby} />
          <Route exact path="/mycv" component={MyCv} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

