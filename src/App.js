import './App.css';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props);
  return (
  <div>
    <h1>Hats Shop</h1>
  </div>
  )
}



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
