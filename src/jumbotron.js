import React from "react";

export default function Jumbotron (){
    return <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci id rhoncus rutrum. Sed id sapien eget enim bibendum pretium. Cras vestibulum faucibus elementum. Maecenas mollis sit amet velit sed convallis. Praesent sit amet.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
}