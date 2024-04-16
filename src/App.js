import React, { useState } from "react";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";
import Header from "./components/Header";
import colleges from "./data";

const App = () => {
  const [filteredCollege, setFilteredCollege] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCollege(filtered);
  };

  const sortColleges = (sortBy) => {
    switch (sortBy) {
      case "highestfees":
        setSortedData(colleges.slice().sort((a, b) => b.fees - a.fees));
        break;
      case "lowestfees":
        setSortedData(colleges.slice().sort((a, b) => a.fees - b.fees));
        break;
      case "userrating":
        setSortedData(
          colleges.slice().sort((a, b) => b.userRating - a.userRating)
        );
        break;
      case "cdranking":
        setSortedData(colleges.slice().sort((a, b) => a.rank - b.rank));
        break;
      default:
        setSortedData(colleges);
        break;
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(238, 233, 227)" }}>
      <Header handleSearch={handleSearch} handleSort={sortColleges} />
      <DataTable filteredCollege={filteredCollege} sortedData={sortedData} />
      <Footer />
    </div>
  );
};

export default App;
