import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand"><span>
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>
                </span>  Contacts App</Link>
            <ul className="navbar-nav ml-auto">
                <NavLink to="/" exact activeClassName="activeLink" className="nav-link">All Contacts</NavLink>
                <NavLink to="/add" activeClassName="activeLink" className="nav-link">Add Contacts</NavLink>
                <NavLink to="/edit" activeClassName="activeLink" className="nav-link">Delete Contact</NavLink>
            </ul>
        </nav>
    )
}
