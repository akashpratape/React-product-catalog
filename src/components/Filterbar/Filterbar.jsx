// import React from "react";
// import "./Filterbar.css";

// function Filterbar() {
//     return (
//         <div>

//             <div className="filters-container">

//                     <aside>
//                         <h3 className="filter-name">Categories</h3>

//                         <label className="filter-ele filter">
//                             <input type="checkbox" />
//                             Electronics
//                         </label>

//                         <label className="filter-jewl filter">
//                             <input type="checkbox" />
//                             Jewelry
//                         </label>

//                         <label className="filter-mc filter">
//                             <input type="checkbox" />
//                             Men's Clothing
//                         </label>

//                         <label className="filter-wc filter">
//                             <input type="checkbox" className="chkbx"/>
//                             Women's Clothing
//                         </label>

//                         <button className="apply-btn">Apply</button>
//                     </aside>

//             </div>
        
//         </div>
//     )
// };

// export default Filterbar;


import React, { useState } from "react";
import "./Filterbar.css";

function FilterBar({ onApplyFilter }) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Handle checkbox toggle
    const handleCheckboxChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category) // Remove category
                : [...prev, category] // Add category
        );
    };

    // Send selected categories to MainPage when "Apply" is clicked
    const handleApply = () => {
        onApplyFilter(selectedCategories);
    };

    return (
        <div className="filters-container">
            <aside>
                <h3 className="filter-name">Categories</h3>

                <label className="filter-ele filter">
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("electronics")}
                    />
                    Electronics
                </label>

                <label className="filter-jewl filter">
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("jewellery")}
                    />
                    Jewelry
                </label>

                <label className="filter-mc filter">
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("mensclothing")}
                    />
                    Men's Clothing
                </label>

                <label className="filter-wc filter">
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("womensclothing")}
                    />
                    Women's Clothing
                </label>

                <button className="apply-btn" onClick={handleApply}>
                    Apply
                </button>
            </aside>
        </div>
    );
}

export default FilterBar;


