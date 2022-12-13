import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Page</h1>
        <form action='/pokemon' method='POST'>
            Name: <input type='text' name='name' /><br/>
            Img: <input type='text' name='img' /><br/>
            <input type='submit' name='' value='Add Pokemon'/>
        </form>
      </div>
    )
  }
}

module.exports = New;