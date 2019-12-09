import React, { Component } from 'react'

import '../App.css';
import {ContextConsumer} from '../Context/appContext'
import TrackList from './TrackList';
import PageNavigator from './PageNavigator'

export default class Browser extends Component 
{
    constructor(){
      super();
       
      this.state = {
        query: null
      }
    }
     
    render() 
    {
      return (
        <ContextConsumer>
        {
          (value) =>
          (
            <React.Fragment>
              <div style={headerWrapper} >
                <div className="input">
                  <form onSubmit={(event)=> {event.preventDefault(); value.handleSubmit(this.state.query)} } >
                      <p><input type="text" id="input-a" placeholder="Buscar en Spotify!" name="query" onChange={this.handleInputChange} /></p>
                  </form>
                </div>
              </div>

              <div style={contentWrapper} >
              {
                value.items && value.items.length > 0 ? 
                  <React.Fragment>
                    <TrackList />
                    <PageNavigator />
                  </React.Fragment>
                : <h2 style={mensajeStyle} >{value.mensaje}</h2> 
              }
              </div>
            </React.Fragment>
          ) 
        } 
      </ContextConsumer>
        )
    }
  
    //OnChange del Input text de busqueda
    handleInputChange = (event) =>{
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value
      })
    }

}

const headerWrapper = {
  display: "grid",
  backgroundColor: "#333333",
}

const contentWrapper = {
  display: "grid",
  width: "80%",
  marginLeft: "10%",
  gridGap: "5px" 

}

const mensajeStyle = {
  fontFamily: "Lato",
}