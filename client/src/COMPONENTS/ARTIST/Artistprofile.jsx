import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Artistprofile.css'

class Artistprofile extends Component {
  render(props) {
    let index = this.props.match.params.id;
    let artist;
    return (
    <>
      {this.props.data[index] &&
          <div className="profile" key={artist}>
        <img alt="artist portrait" src={this.props.data.portraitImg}></img>
        <h4>{this.props.data.name}</h4>
        <p>{this.props.data.artistBio}</p>
        <h3>Gallery: {this.props.data.gallery}</h3>
          </div>
      }
        </>
    )
  }
}

export default withRouter(Artistprofile);
