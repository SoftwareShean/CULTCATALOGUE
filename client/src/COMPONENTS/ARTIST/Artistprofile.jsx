import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Artistprofile.css'

class Artistprofile extends Component {
  render(props) {
    let id = this.props.match.params.id;
    let artist;
    console.log('Line 9 ' + artist)
    if (id) {
      artist = this.props.data.find(artist => artist._id === this.props.match.params.id)
    }
    return (
    <>
      {this.props.data &&
          <div className="profile" key={artist}>
        <h4>{artist.name}</h4>
        {/* <h3>Gallery: {artist.gallery}</h3> */}
        <img alt="artist portrait" src={artist.portraitImg}></img>
        <p>{artist.artistBio}</p>
          </div>
      }
        </>
    )
  }
}

export default withRouter(Artistprofile);
