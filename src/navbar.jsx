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
            <a className="nav-link active text-white" aria-current="page" href="#">{props.option1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">{props.option2}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white-50" href="#">{props.option3}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-white-50">{props.option4}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}
Navbar.propTypes = {
  title: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  option4: PropTypes.string
};
export default Navbar;