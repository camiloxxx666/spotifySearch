import React, {Component} from 'react'
import {search, changePage} from '../Service/spotifyService'

const AppContext = React.createContext();

class ContextProvider extends Component
{
    constructor(){
        super()
        const params = this.getHashParams();
        this.state = {
            loggedIn: params.access_token ? true : false,
            credentials: params,
            items: null,
            offset: 0,
            previous: null,
            next: null,
            total: 0,
            mensaje: ""
        }
    }

    //Obtengo el token de los parametros de la url
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    //Busqueda
    handleSubmit = (query) =>
    { 
      if(query)
      {
        search(query, this.state.credentials.access_token)
        .then(res => {
            if(res && res.data.tracks.items && res.data.tracks.items.length>0 ){
                console.log(res)
                this.setState({
                    items: res.data.tracks.items,
                    offset: res.data.tracks.offset,
                    previous: res.data.tracks.previous,
                    next: res.data.tracks.next,
                    total: res.data.tracks.total,
                    mensaje: ""
                })
            }
            else{
                this.setState({
                    items: null,
                    offset: 0,
                    previous: null,
                    next: null,
                    total: 0,
                    mensaje: "No hay resultados"
                })
            }
        })
      }
    }

    handlePrevPage = () =>
    {
        changePage(this.state.previous, this.state.credentials.access_token)
        .then(res =>{
            if(res && res.data.tracks.items && res.data.tracks.items.length>0 )
            {
                this.setState({
                    items: res.data.tracks.items,
                    offset: res.data.tracks.offset,
                    previous: res.data.tracks.previous,
                    next: res.data.tracks.next,
                    total: res.data.tracks.total,
                    mensaje: ""
                })
            }
            else{
                this.setState({
                    items: null,
                    offset: 0,
                    previous: null,
                    next: null,
                    total: 0,
                    mensaje: "No hay resultados"
                })
            }
        })
    }

    handleNextPage = () =>
    {
        changePage(this.state.next, this.state.credentials.access_token)
        .then(res =>{
            if(res)
            {
                this.setState({
                    items: res.data.tracks.items,
                    offset: res.data.tracks.offset,
                    previous: res.data.tracks.previous,
                    next: res.data.tracks.next,
                    total: res.data.tracks.total,
                    mensaje: ""
                })
            }
        })
    }

    handleRefreshToken = () =>
    {
        //Queda pendiente por ahora.
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state, //Paso el estado completo
                handleSubmit: this.handleSubmit,
                handlePrevPage: this.handlePrevPage,
                handleNextPage: this.handleNextPage 
            }} >
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

const ContextConsumer = AppContext.Consumer;

export {ContextProvider, ContextConsumer}