import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    return (
      <div>
        <h1>Edit Pokemon</h1>
        <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
            Name: <input type='text' name='name' defaultValue={this.props.pokemon.name} /><br/>
            <input type='submit' value='Submit Changes'/>
        </form>
        <a href='/pokemon'>Cancel</a>
      </div>
    )
  }
}

module.exports = Edit;