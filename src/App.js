import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Navigation from './Components/Navigation';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
          <Switch>
            <div className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            </div>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
