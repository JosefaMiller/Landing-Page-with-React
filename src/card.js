import React from "react";

export default function Card(){
    return <div className="card" style={{ width: "19rem", margin: "12px", display:"flex", justifyContent:"center"}}>
    <img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" alt="..."></img>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci id rhoncus rutrum. Sed id sapien eget enim bibendum pretium. Cras vestibulum faucibus elementum.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
}