import React, { Component } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom';

export default class Hello extends Component {
  render() {
    return (
      <Header title="404 ">
        <h2>You are in wrong place</h2>
        <Link to="/"
        className="text-uppercase btn btn-secondary btn-lg mt-3"

        >Return Home
        </Link>
      </Header>

    )
  }
}
