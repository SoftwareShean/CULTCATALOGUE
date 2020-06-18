import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

export default class Createpage extends Component {
  render() {
    return (
      <form>
        <h6>Input artist name, and their picture.</h6>
        <input placeholder="Artist name" type="text" />
        <input placeholder="Artist portrait link" type="text" />
        <h6>Include information about this artist</h6>
        <input placeholder="Artist bio" type="text" />
        <input placeholder="Source" text="text" />
        <h6>Include the artists gallery name</h6>
        <input placeholder="Gallery name" type="text" />
        <input placeholder="Gallery website link" type="text" />
        <h6>Include some images of their work</h6>
        <input placeholder="Title of piece" type="text" />
        <input placeholder="Description" type="text" />
        <input placeholder="Piece dimensions" type="text" />
        <input placeholder="Piece date" type="text" />
        <input placeholder="Link to image of piece" type="text" /> 
        {/* need button for adding another input box for additional links */}
        <input placeholder="Source of image" type="text" />
        <button>Add more work</button>
        <br />
        <br />
        {/* <Redirect path="/"> */}
          <button>Create New Artist</button>
        {/* </Redirect> */}
      </form>
    );
  }
}
