import React from "react";
import "../background.css";
import Navbar from "./Navbar/Navbar.jsx";
import Filterbar from "./Filterbar/Filterbar.jsx";
import ProductCard from "./Productcard/Productcard.jsx";

function MainPage() {
    return (
        <div>
            <Navbar />
            <Filterbar />
            <ProductCard />
        </div>

    )
}

export default MainPage;