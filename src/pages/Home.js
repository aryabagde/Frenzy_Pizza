import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza_banner5.jpg";
import "../styles/Home.css";



function Home() {
    return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
       
        <div className="headerContainer">
            <h1> Frenzy Pizzeria </h1>
            <p> SEEK THE UNIQUE!</p>
            <Link to="/menu">
                <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
    )
}

export default Home
