import React from 'react';
import Navbar from './Components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import List from './Components/List'
import Stores from './Components/Stores'
import Day from './Components/Dday';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={List}/>
        <Route path='/stores' component={Stores}/>
        <Route path='/dday' component={Day}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App
