import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
export default function Landing() {
    
    return <main>
        <Navbar title="Landing Page" option1="Home" option2="Features" option3="Pricing" option4="Disabled"/>
        <div className="container">
        <Jumbotron title="A Warm Welcome!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci id rhoncus rutrum. Sed id sapien eget enim bibendum pretium. Cras vestibulum faucibus elementum. Maecenas mollis sit amet velit sed convallis. Praesent sit amet." button="Call to action!"/>
        <div className="row">
        <Card img="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci id rhoncus rutrum. Sed id sapien eget enim bibendum pretium. Cras vestibulum faucibus elementum." button="Go somewhere"/>
        <Card img="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci id rhoncus rutrum. Sed id sapien eget enim bibendum pretium. Cras vestibulum faucibus elementum." button="Go somewhere"/>
        <Card img="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci id rhoncus rutrum. Sed id sapien eget enim bibendum pretium. Cras vestibulum faucibus elementum." button="Go somewhere"/>
        <Card img="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor orci id rhoncus rutrum. Sed id sapien eget enim bibendum pretium. Cras vestibulum faucibus elementum." button="Go somewhere"/>
        

        </div>
        </div>
    </main>
}