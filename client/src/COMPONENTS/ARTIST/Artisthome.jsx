import React, { Component } from 'react';
import './Artisthome.css';
import { Link, withRouter } from 'react-router-dom'

class Artisthome extends Component {
  render(props) {
    let index = this.props.match.params.id;
    return (
    <>
        {this.props.data.map((artist, _id) =>
        {return <Link to={`/artist/${artist._id}`}>
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

export default withRouter(Artisthome);