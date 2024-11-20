import React from "react";
import "./DetailedCard.css";

function DetailedCard({ product, onClose }) {
    if (!product) return null; // Render nothing if no product is selected

    return (
        <div className="modal-overlay">
            <div className="detailed-card">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                <div className="detailed-card-content">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="detailed-card-image"
                    />
                    <div className="detailed-card-details details">
                        <h2 className="details-name details">{product.name}</h2>
                        <p className="details-price details">Price:${product.price}</p>
                        <p className="details.descript details">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedCard;


