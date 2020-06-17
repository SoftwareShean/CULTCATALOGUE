import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../HEADER/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/"><h1>CULTCATALOGUE</h1></Link>
        <h4>SIGN IN</h4>
      </header>
    )
  }
}
