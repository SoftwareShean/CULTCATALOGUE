import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Artistprofile.css'

class Artistprofile extends Component {
  render(props) {
    let id = this.props.match.params.id;
    let artist;
    if (id) {
      artist = this.props.data.find(artist => artist._id === this.props.match.params.id)
    }
    console.log(artist)
    return (
    <>
      {this.artist &&
  <div className="profile" key={artist}>
<p>{artist.artistBio[0].description}</p>
  </div>
}
        </>
    )
  }
}

export default withRouter(Artistprofile);
