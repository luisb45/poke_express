import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    const {pokemon} = this.props
    return (
        <div>
      <h1>Gotta Catch 'Em All!</h1>
      <a href={`/pokemon`}> back</a>
                <div key='{pokemon}'>
                  <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2> <br></br>
                  <img src={pokemon.img + '.jpg'}></img>
                </div>
      </div>
    )
  }
}

module.exports = Show;