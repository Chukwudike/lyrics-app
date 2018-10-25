import React, { Component } from 'react'
import {Consumer} from "./../../context"
import axios from "axios"

export default class Search extends Component {
    state = {
        trackTitle : ''
    }
    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    findTrack = (dispatch,e) => {
        e.preventDefault()
        axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`).then(
        res=>{
    dispatch({
        type : 'SEARCH_TRACKS',
        payload : res.data.message.body.track_list
       
    })
    this.setState({trackTitle : ''})
        }).catch(err=>console.log(err))
    }

  render() {
    return (
    <Consumer>
        {
            value => {
                const {dispatch} = value
                return (
                    <div className="card card-body mb-4 p-4">
                    <div className="display-4 text-center">
                    <h1>
                    <i className="fas fa-music"/> Search for a Song
                    </h1>
                    <p className="lead text-center">Get the lyrics for any song</p>
                    <form onSubmit={this.findTrack.bind(this,dispatch)}>
                        <div className="form-group">
                        <input type="text"className="form-control form-control-lg" placeholder="Song title"
                        name ="trackTitle"
                        onChange = {this.onChange}
                        />
                        </div>
                        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Track Lyrics</button>
                    </form>
                    </div>
                    </div>
                )
            }
        }
    </Consumer>
    )
  }
}
