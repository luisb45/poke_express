import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>Add a New Pokemon</h1>
        
        <form action='/pokemon' method='POST'>
            Name: <input type='text' name='name' /><br/>
            Ready To Evolve: <input type="checkbox" name="readyToEvolve"/><br/>
            <input type='submit' name='' value='Add Pokemon'/>
        </form>
        <a href='/pokemon'>Back</a>
      </div>
    )
  }
}

module.exports = New;