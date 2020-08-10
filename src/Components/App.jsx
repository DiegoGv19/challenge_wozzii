import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import './../Styles/styles.scss'
import Confirmation from './Pages/Confirmation'
import Main from './Pages/Main'
import Header from './Organisms/Header'
import Error from './Pages/Error'
import Users from './Pages/Users'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/confirmation/:be&&:name&&:lastname" component={Confirmation} />
        <Route path="/users"  component={Users}/>
        <Route component={Error}/>
      </Switch>

    </Router>
  );
}

export default App;
