import React, { Component } from 'react';
import logo from '../Data/Images/food.png';
import { Link } from 'react-router-dom';




export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt="logo" className='navbar-logo' />
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ms-auto'>
              <li className='navbar-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='navbar-item'>
                <Link className='nav-link' to="/recipes">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
