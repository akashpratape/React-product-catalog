import React, { useState, useEffect } from "react";
import products from "../../data/products.json";
import "./Productcard.css";

// Function to truncate the description
function truncateDescription(description, wordLimit) {
    if (!description) return ""; // Return empty string if no description
    const words = description.split(" ");
    return words.length <= wordLimit 
        ? description 
        : words.slice(0, wordLimit).join(" ") + "...";
}

function ProductCard() {
    // State for product data
    const [data, setData] = useState([]);
    
    // State to track hover for each card's buttons
    const [hoverState, setHoverState] = useState({});

    // Load product data from the static JSON
    useEffect(() => {
        if (products && Array.isArray(products)) {
            setData(products);
        } else {
            console.error("Failed to load product data", products);
        }
    }, []);

    return (
        <div className="product-layout">
            <div className="grid-container">
                {data.map((item) => {

                    return (
                        <div className="card-container" key={item.id}>
                            <img className="card-image" src={item.image} alt={item.name || "Product"} />
                            <div className="card-content">
                                <p className="card-title">{item.name || "Product name not available"}</p>
                                <p className="card-price">${item.price || "Price not available"}</p>
                            </div>
                            <div className="card-descript">
                                <p>{truncateDescription(item.description, 20) || "No description available."}</p>
                            </div>
                            <div className="card-buttons">
                                <button className="buynow-btn card-btns"><span>Buy Now</span></button>
                                <button className="addtocart-btn card-btns"><span>Add to Cart</span></button>
                            </div> 
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductCard;
