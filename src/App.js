import React from 'react';
import Navbar from './Components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import List from './Components/List'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={List}/>
        <Route path='/' component={List}/>
        <Route path='/' component={List}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App
