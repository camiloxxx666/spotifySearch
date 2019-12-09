import React, { Component } from 'react'
import {ContextConsumer} from '../Context/appContext'

export default class PageNavigator extends Component {
    render() {
        return (
            <ContextConsumer>
            {
                (value) =>
                (
                    <div style={navigatorStyle}>
                        <div>{value.previous ? <button style={btn_navigation} 
                        onClick={(event)=> {event.preventDefault(); value.handlePrevPage()}} >Anterior</button> : "" } 
                        </div>
                        
                        <div>{value.next ? <button style={btn_navigation} 
                        onClick={(event)=> {event.preventDefault(); value.handleNextPage()}} >Siguiente</button> : "" }   
                        </div>
                    </div>
                )
            }
            </ContextConsumer>
        )
    }
}

const navigatorStyle = {
    height: "70px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "0px 5px"
}

const btn_navigation ={
    width: "100%", 
    height:"100%",
    backgroundColor: "#222",
    border: "1px solid black",
    color: "#1ed761",
    fontFamily: "Lato",
    fontSize: "1.2em",
}

