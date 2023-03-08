import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
export default function Landing() {
    
    return <main>
        <Navbar/>
        <div className="container">
        <Jumbotron/>
        <div className="row">
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
    </main>
}
