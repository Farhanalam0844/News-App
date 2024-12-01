import React, { Component } from 'react'
import mygif from './Filled fading balls.gif'
export default class Wheel extends Component {
  render() {
    return (
      <div className='image'>
        <img src={mygif} alt="gif" />
      </div>
    )
  }
}
