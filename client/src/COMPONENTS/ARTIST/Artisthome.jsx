import React, { Component } from 'react';
import '../ARTIST/Artisthome.css';

export default class Artisthome extends Component {
  render() {
    return (
      <div className="artistHome shaddow">
        <img alt="artist portrait" src="https://gerryco23.files.wordpress.com/2014/11/grayson-perry.jpg?w=725&h=408"></img>
        <div className="textOverlay">
          <h4>Grayson Perry</h4>
        </div>
      </div>
    )
  }
}
