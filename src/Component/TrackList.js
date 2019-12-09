import React, { Component } from 'react'

import Track from './Track';
import {ContextConsumer} from '../Context/appContext'

export default class TrackList extends Component {
    render() {
        return (
            <ContextConsumer>
            {
              (value) => value.items.map(track => <Track track={track} key={track.id} />)
            }
            </ContextConsumer>
        )
    }
}
