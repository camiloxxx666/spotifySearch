import React, {Component} from 'react';
import './App.css';

import {ContextConsumer} from './Context/appContext'
import Browser from './Component/Browser';

class App extends Component 
{
  render(){
    return (
      <div style = {container}>
        <ContextConsumer>
          {
            (value)=>
            {
              return value.loggedIn ? <Browser /> : 
              <a className="loginButton" href="http://localhost:8888">Spotify LogIn</a>
            }
          }
        </ContextConsumer>
      </div>
    );
  }
  
}

export default App;

const container = {
  display: "grid",
  height: "100%",
  gridTemplateRows: "minmax(50px, min-content) auto",
  color: "#F5F5F5"
}
