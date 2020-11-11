import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './Components/Home';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation setLoadingScreen={this.setLoadingScreen} userCreateOrLogin={this.userCreateOrLogin} getPlacedBets={this.getPlacedBets} username={this.state.username} balance={this.state.balance} logout={this.logout} userId={this.state.userId} />
          <Switch>
            <div className="main">
            <Route exact path="/" component={Home} />
              <Route exact path="/account" render={(props) => (
                this.state.userId !== 0 ? <Account logout={this.logout} passwordChange={this.state.passwordChange} editPassword={this.editPassword} balance={this.state.balance} username={this.state.username} /> :
                  <Home error={this.state.error} showError={this.state.showError} hideError={this.hideError} />
              )} />
            </div>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
