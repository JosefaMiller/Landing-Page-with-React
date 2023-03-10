import React from "react";
import PropTypes from 'prop-types';

function Card(props) {
    return (<div className="card" style={{ width: "19rem", margin: "12px", display: "flex", justifyContent: "center" }}>
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">{props.button}</a>
        </div>
    </div>
    );
}
Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string
};
export default Card;