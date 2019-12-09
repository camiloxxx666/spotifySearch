import React from 'react'

export default function Track(props) {
    return (
        <div style={trackContainer}>
            <div style={{padding: "5px"}} >
                <img style={{height: "70px"}} src={props.track.album.images[0].url} alt="album"/>
            </div>
            <div style={trackInfo}>
                <h3 style={{color: "white", fontSize: "14px"}}>{props.track.name} </h3>
                <h4>{millisToMinutesAndSeconds(props.track.duration_ms)} </h4>    
                <h4>Album: {props.track.album.name}</h4>
                <h4>Artista: {props.track.artists[0].name} </h4>
            </div>        
        </div>
    )
}

//Funcion utilitaria convierte milisegundos en minutos:segundos
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const trackContainer = {
    display: "grid",
    gridTemplateColumns: "80px 1fr",
    fontFamily: "Lato",
    color: "#777",
    height: "80px",
    backgroundColor: "#222",
    gridGap: "0px 5px"
}

const trackInfo = {
    display: "grid",
    gridTemplateColumns: "60% 40%",
    gridTemplateRows: "30% 70%",
    fontSize: "14px"
}