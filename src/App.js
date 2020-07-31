import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './component/Home';
import Dashboard from './component/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/campaigns" component={Home}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
}

export default App;