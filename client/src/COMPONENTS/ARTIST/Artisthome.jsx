import React, { Component } from 'react';
import '../ARTIST/Artisthome.css';
import { Link } from 'react-router-dom'

export default class Artisthome extends Component {
  render(props) {
    return (
    <>
        {this.props.data.map((artist, index) =>
        { return <Link to={`/artist/${index}`}>
        < div className = "artistHome shaddow" >
        <img alt="artist portrait" src={artist.portraitImg}></img>
        <div className="textOverlay">
          <h4>{artist.name}</h4>
        </div>
        </div >
        </Link>
        })
    }
    </>
    )
  }
}
