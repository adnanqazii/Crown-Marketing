import React from 'react'
import './style.css'
export default () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top d-flex justify-content-between">

            <a className="navbar-brand" href="#">Logo</a>


            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#about-us">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact-us">Contact Us</a>
                </li>


                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Dropdown link
      </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>
            </ul>

            <span className="navbar-text">
                 info@dmsolution.pk 021-345-42221 | +92-311-2053900
  </span>
        </nav>
    )
}