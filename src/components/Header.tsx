import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/" className="NavLink">
            BlindVest
          </NavLink>
        </header>
      </>
    )
  }
}

export default Header
