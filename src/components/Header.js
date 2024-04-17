import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Header = ({ handleSearch, handleSort, handleAllCollege }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(""); // State for sorting option

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    handleSort(selectedSortBy);
  };

  const handleClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="header">
      <div className="left">
        <h1>College List</h1>
      </div>
      <div className="right">
        <div className="all-colleges">
          <button onClick={handleAllCollege}>All Colleges</button>
        </div>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="cdranking">College Duniya Ranking</option>
          <option value="highestfees">Highest Fees</option>
          <option value="lowestfees">Lowest Fees</option>
          <option value="userrating">User Review Rating</option>
        </select>

        <div className="input-area">
          <input
            type="text"
            placeholder="Search by college name"
            value={searchTerm}
            onChange={handleChange}
          />
          <IoIosSearch onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
