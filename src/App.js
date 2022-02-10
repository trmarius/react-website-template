import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Tokenomics from './components/pages/Tokenomics';
import Roadmap from './components/pages/Roadmap';
import Howtobuy from './components/pages/Howtobuy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/about' component={About}/>
        <Route path='/roadmap' component={Roadmap}/>
        <Route path='/tokenomics' component={Tokenomics}/>
        <Route path='/How-to-buy' component={Howtobuy}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
