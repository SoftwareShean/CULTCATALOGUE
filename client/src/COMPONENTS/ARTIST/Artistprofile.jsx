import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Artistprofile.css'

class Artistprofile extends Component {
  render(props) {
    let id = this.props.match.params.id;
    console.log(id)
    console.log(this.props.data)
    let artist;
    if (id && this.props.data) {
      artist = this.props.data.find(artist => artist._id === id)
    }
    console.log(artist)
    return (
    <>
      {this.props.data &&
  <div className="profile" key={artist}>
          <h1>{artist.name[0]}</h1>
          <img src={artist.portraitImg[0]} />
          <p>{artist.artistBio[0].description}</p>
          <div className="portfolio">
            <img src={artist.portfolio[0].images[0]} />
            <p>{artist.portfolio[0].description}</p>
          </div>
          
  </div>
}
        </>
    )
  }
}

export default withRouter(Artistprofile);
