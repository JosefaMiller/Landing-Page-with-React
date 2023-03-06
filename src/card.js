import React from "react";

export default function Card(){
    return <div className="card" style={{ width: "18rem" }}>
    <img src="https://images.hola.com/imagenes/decoracion/20210407187306/cuidados-poto-plantas-interior-mc/0-937-865/cultivar-poto-1-a.jpg?tx=w_360" className="card-img-top" alt="..."></img>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
}