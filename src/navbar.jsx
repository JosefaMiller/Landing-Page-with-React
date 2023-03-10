import React from "react";
import PropTypes from 'prop-types';

function Navbar (props){
    return <nav className="navbar navbar-expand-lg bg-body-tertiary text-light bg-dark" style={{padding: "10px"}}>
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" style={{margin: "0 0 0 75%"}} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-white-50">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}
Navbar.propTypes = {
  title: PropTypes.string
};
export default Navbar;