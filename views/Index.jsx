import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const {pokemon} = this.props
    return (
        <div>
      <h1>See All The Pokemon!</h1>
      <ul>{
        pokemon.map((pokemon, i)=>{
            return(
                <li key='{pokemon}'>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} <br></br>
                  <a href={`/pokemon/${i}`}> link</a>
                </li>
            )
        })
        } 
      </ul>
      </div>
    )
  }
}



module.exports = Index;