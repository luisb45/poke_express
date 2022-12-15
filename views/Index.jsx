import React, { Component } from 'react'

const h1Style = {
  textAlign: "center",
  color: 'yellow',
  textShadow: "8px 5px 0 blue",
  backgroundColor: "red",
  fontSize: "50px",
  fontFamily: "fantasy",
  border: '5px solid black'
};

const background = {
  backgroundColor: "#585858",
};

const listStyle = {
  backgroundColor: "midnightblue",
  marginBottom: "10px",
  color: "white",
  border: '2px solid red'
};

const newStyle = {
  textAlign: 'center',
  color: 'yellow',
  fontSize: '20px',
  backgroundColor: 'yellow',
  border: '2px solid black'
}

export default class Index extends Component {
  render() {
    const {pokemon} = this.props
    return (
        <div >
        <body style={background}>
      <h1 style={h1Style}>Pokedex</h1>
      <nav style={newStyle}>
        <a href='/pokemon/new'>Add new Pokemon</a>
      </nav>
      <ul>{
        pokemon.map((pokemon)=>{
            return(
              <div key='{uniqueid}'>
                <li key='{pokemon}' style={listStyle}>
                  <a style={{color: 'silver'}} href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} <br></br></a>
                   {pokemon.readyToEvolve? "Ready to evolve" : "Not ready to evolve"}
                   <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method="POST">
                     <input style={{float: 'right'}} type="submit" value="Delete"/>
                   </form>
                  <a style={{color: 'silver'}} href={`/pokemon/${pokemon._id}/edit`}>Edit</a>
                </li>
                </div>
            )})
        } 
      </ul>
      </body>
      </div>
    )
  }
}



module.exports = Index;