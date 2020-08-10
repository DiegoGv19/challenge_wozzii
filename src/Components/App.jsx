import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import './../Styles/styles.scss'
import Confirmation from './Pages/Confirmation'
import Main from './Pages/Main'
import Header from './Organisms/Header'
import Error from './Pages/Error'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/confirmation/:be" component={Confirmation} />
        <Route component={Error}/>
      </Switch>

    </Router>
  );
}

export default App;
