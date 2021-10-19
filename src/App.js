import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListMain from './components/ListMain';
import NotFound from './components/NotFound';
import IndividualFeed from './components/individualFeed';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListMain />
        </Route>
        <Route path="/individualFeed">
          <IndividualFeed />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
