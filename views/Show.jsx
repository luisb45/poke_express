import React, { Component } from 'react'

const pStyle = {
  textAlign: 'center',
  fontFamily: 'Fantasy',
  fontSize: '45px'
};

const imgStyle = {
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '30%',
  border: '8px solid'
};

const backGround = {
  height: '100%',
  background: 'linear-gradient(90deg, red 50%, white 50%)'
}

export default class Show extends Component {
  render() {
    const {pokemon} = this.props
    return (
        <div>
          <body style={backGround}>
          <a href={`/pokemon`}> back</a>
          <h1 style={pStyle}>Gotta Catch 'Em All!</h1>
                <div key='{pokemon}'>
                  <h2 style={pStyle}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2> <br/>
                  <h3 style={pStyle}>{pokemon.readyToEvolve ? `Ready to evolve!`: "Not ready to evolve"}</h3>
                  <img style={imgStyle} src={pokemon.img + pokemon.name +'.jpg'}></img>
                </div>
        </body>
      </div>
    )
  }
}

module.exports = Show;