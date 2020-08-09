import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './../Styles/styles.scss'
import Confirmation from './Pages/Confirmation';
import Main from './Pages/Main';
import Header from './Organisms/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Router path="/confirmation" component={Confirmation} />
      </Switch>

    </Router>
  );
}

export default App;
