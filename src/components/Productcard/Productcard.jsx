// import React from "react";
// import "./Productcard.css";

// // Function to truncate the description
// function truncateDescription(description, wordLimit) {
//     if (!description) return ""; // Return empty string if no description
//     const words = description.split(" ");
//     return words.length <= wordLimit
//         ? description
//         : words.slice(0, wordLimit).join(" ") + "...";
// }

// function ProductCard({ products }) {
//     return (
//         <div className="product-layout">
//             <div className="grid-container">
//                 {products.map((item) => (
//                     <div className="card-container" key={item.id}>
//                         <img
//                             className="card-image"
//                             src={item.image}
//                             alt={item.name || "Product"}
//                         />
//                         <div className="card-content">
//                             <p className="card-title">{item.name || "Product name not available"}</p>
//                             <p className="card-price">${item.price || "Price not available"}</p>
//                         </div>
//                         <div className="card-descript">
//                             <p>
//                                 {truncateDescription(item.description, 20) || "No description available."}
//                             </p>
//                         </div>
//                         <div className="card-buttons">
//                             <button className="buynow-btn card-btns">
//                                 <span>View Details</span>
//                             </button>
//                             <button className="addtocart-btn card-btns">
//                                 <span>Add to Cart</span>
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductCard;


// import React, { useState } from "react";
// import DetailedCard from "../DetailedCard/DetailedCard.jsx";
// import "./Productcard.css";

// function truncateDescription(description, wordLimit) {
//     if (!description) return ""; // Return empty string if no description
//     const words = description.split(" ");
//     return words.length <= wordLimit
//         ? description
//         : words.slice(0, wordLimit).join(" ") + "...";
// }

// function ProductCard({ products }) {
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     // Show detailed card
//     const handleViewDetails = (product) => {
//         setSelectedProduct(product);
//     };

//     // Close detailed card
//     const handleCloseDetails = () => {
//         setSelectedProduct(null);
//     };

//     return (
//         <div className="product-layout">
//             <div className="grid-container">
//                 {products.map((item) => (
//                     <div className="card-container" key={item.id}>
//                         <img
//                             className="card-image"
//                             src={item.image}
//                             alt={item.name || "Product"}
//                         />
//                         <div className="card-content">
//                             <p className="card-title">{item.name || "Product name not available"}</p>
//                             <p className="card-price">${item.price || "Price not available"}</p>
//                         </div>
//                         <div className="card-descript">
//                             <p>
//                                 {truncateDescription(item.description, 20) || "No description available."}
//                             </p>
//                         </div>
//                         <div className="card-buttons">
//                             <button
//                                 className="view-details-btn card-btns"
//                                 onClick={() => handleViewDetails(item)}
//                             >
//                                 View Details
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Render DetailedCard when a product is selected */}
//             {selectedProduct && (
//                 <DetailedCard
//                     product={selectedProduct}
//                     onClose={handleCloseDetails}
//                 />
//             )}
//         </div>
//     );
// }

// export default ProductCard;


// import React, { useState } from "react";
// import DetailedCard from "../DetailedCard/DetailedCard.jsx";
// import products from "../../data/products.json";
// import "./Productcard.css";

// function ProductCard() {
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     // Show detailed card
//     const handleViewDetails = (product) => {
//         setSelectedProduct(product);
//     };

//     // Close detailed card
//     const handleCloseDetails = () => {
//         setSelectedProduct(null);
//     };

//     return (
//         <div className="product-layout">
//             <div className="grid-container">
//                 {products.map((item) => (
//                     <div className="card-container" key={item.id}>
//                         <img
//                             className="card-image"
//                             src={item.image}
//                             alt={item.name || "Product"}
//                         />
//                         <div className="card-content">
//                             <p className="card-title">{item.name || "Product name not available"}</p>
//                             <p className="card-price">${item.price || "Price not available"}</p>
//                         </div>
//                         <div className="card-descript">
//                             <p>
//                                 {item.description.length > 50
//                                     ? item.description.substring(0, 50) + "..."
//                                     : item.description}
//                             </p>
//                         </div>
//                         <div className="card-buttons">
//                             <button
//                                 className="buynow-btn card-btns"
//                                 onClick={() => handleViewDetails(item)}
//                             >
//                                 View Details
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Render DetailedCard when a product is selected */}
//             {selectedProduct && (
//                 <DetailedCard
//                     product={selectedProduct}
//                     onClose={handleCloseDetails}
//                 />
//             )}
//         </div>
//     );
// }

// export default ProductCard



import React, { useState } from "react";
import "./Productcard.css";
import DetailedCard from "../DetailedCard/DetailedCard"; // Import the new DetailedCard component

// Function to truncate the description
function truncateDescription(description, wordLimit) {
    if (!description) return ""; // Return empty string if no description
    const words = description.split(" ");
    return words.length <= wordLimit
        ? description
        : words.slice(0, wordLimit).join(" ") + "...";
}

function ProductCard({ products }) {
    const [selectedProduct, setSelectedProduct] = useState(null); // State to track the selected product

    const handleViewDetails = (product) => {
        setSelectedProduct(product); // Open the detailed view with the selected product
    };

    const handleCloseDetails = () => {
        setSelectedProduct(null); // Close the detailed view
    };

    return (
        <div className="product-layout">
            <div className="grid-container">
                {products.map((item) => (
                    <div className="card-container" key={item.id}>
                        <img
                            className="card-image"
                            src={item.image}
                            alt={item.name || "Product"}
                        />
                        <div className="card-content">
                            <p className="card-title">{item.name || "Product name not available"}</p>
                            <p className="card-price">${item.price || "Price not available"}</p>
                        </div>
                        <div className="card-descript">
                            <p>
                                {truncateDescription(item.description, 20) || "No description available."}
                            </p>
                        </div>
                        <div className="card-buttons">
                            <button
                                className="buynow-btn card-btns"
                                onClick={() => handleViewDetails(item)} // Trigger detailed view
                            >
                                <span>View Details</span>
                            </button>
                            <button className="addtocart-btn card-btns">
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Render the DetailedCard component when a product is selected */}
            {selectedProduct && (
                <DetailedCard product={selectedProduct} onClose={handleCloseDetails} />
            )}
        </div>
    );
}

export default ProductCard;




