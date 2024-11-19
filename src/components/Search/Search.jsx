import React, { useState } from "react";
import search from "../../assets/icons/search.json";
import Lottie from "lottie-react";
import "./Search.css";

function Search() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isHoveredSearch, setIsSearch] = useState(false);

  const handleAnimationClick = () => setSearchVisible(!isSearchVisible);
  const handleMouseEnterSearch = () => setIsSearch(true);
  const handleMouseLeaveSearch = () => setIsSearch(false);

  return (
    <div className="search-container">
      <div
        className={`search-field-container ${
          isSearchVisible ? "expanded" : ""
        }`}
      >
        <input
          type="text"
          placeholder="Trying to find something?"
          className="search-field"
          style={{ display: isSearchVisible ? "block" : "none" }}
        />
        {isSearchVisible && (
          <button
            className="search-button"
            onClick={() => alert("Searching!")}
          >
            Search
          </button>
        )}
      </div>
      <a
        href="#"
        className="search-icon"
        onMouseEnter={handleMouseEnterSearch}
        onMouseLeave={handleMouseLeaveSearch}
        onClick={handleAnimationClick}
      >
        <Lottie
          className="search-anime icons"
          animationData={search}
          autoplay={isHoveredSearch}
          loop={isHoveredSearch}
        />
      </a>
    </div>
  );
}

export default Search;
