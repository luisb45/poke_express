import React, { Component } from 'react'

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

const backGround = {
  
}

export default class Index extends Component {
  render() {
    const {pokemon} = this.props
    return (
        <div>
        <body style={backGround}>
      <h1 style={myStyle}>See All The Pokemon!</h1>
      <nav>
        <a href='/pokemon/new'>Add new Pokemon</a>
      </nav>
      <ul>{
        pokemon.map((pokemon)=>{
            return(
                <li key='{pokemon}'>
                  <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} <br></br></a>
                </li>
            )
        })
        } 
      </ul>
      </body>
      </div>
    )
  }
}



module.exports = Index;