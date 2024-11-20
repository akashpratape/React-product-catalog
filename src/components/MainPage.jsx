// import React from "react";
// import "../background.css";
// import Navbar from "./Navbar/Navbar.jsx";
// import Filterbar from "./Filterbar/Filterbar.jsx";
// import ProductCard from "./Productcard/Productcard.jsx";

// function MainPage() {
//     return (
//         <div>
//             <Navbar />
//             <Filterbar />
//             <ProductCard />
//         </div>

//     )
// }

// export default MainPage;


import React, { useState } from "react";
import "../background.css";
import Navbar from "./Navbar/Navbar.jsx";
import Filterbar from "./Filterbar/Filterbar.jsx";
import ProductCard from "./Productcard/Productcard.jsx";
import products from "../data/products.json";

function MainPage() {
    const [filteredProducts, setFilteredProducts] = useState(products); // Default to all products

    // Handle filtering when categories are selected
    const handleFilter = (categories) => {
        if (categories.length === 0) {
            setFilteredProducts(products); // Show all products if no filter applied
        } else {
            // Filter products based on selected categories
            const filtered = products.filter((product) =>
                categories.includes(product.category.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <Navbar />
            <Filterbar onApplyFilter={handleFilter} />
            <ProductCard products={filteredProducts} />
        </div>
    );
}

export default MainPage;


