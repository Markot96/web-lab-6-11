import React from "react";
import '../styles/Header.css';
import Logo from '../assets/logo.svg';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <div className="HeaderWrapper">
        <nav className="NavBar">
          <NavLink exact to="/" activeClassName="ActiveButton"> Home </NavLink>
          <NavLink exact to="/catalog" activeClassName="ActiveButton"> Catalog </NavLink>
          <NavLink exact to="/cart" activeClassName="ActiveButton"> Cart </NavLink>
        </nav>
        <img src={Logo} className="Logo" alt="logo" />
      </div>
    </div>
  );
}

export default Header;