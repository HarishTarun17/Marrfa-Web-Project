import React, { useState } from "react";
import './styles.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const mockData = [
    { id: 1, title: "React Basics", category: "Technology", date: "2024-01-01" },
    { id: 2, title: "Healthy Living Tips", category: "Health", date: "2023-12-10" },
    { id: 3, title: "Travel Guide 2024", category: "Travel", date: "2024-02-15" },
  ];

  const filteredResults = mockData.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || item.category === filter)
    );
  });

  return (
    <div className="container">
      {/* Header */}
      <h1>Blog Search</h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="filters">
        <label htmlFor="filter">Filter by:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
        </select>
      </div>

      {/* Results Section */}
      <div className="results">
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div className="result-item" key={item.id}>
              <h2>{item.title}</h2>
              <p>
                {item.category} - {item.date}
              </p>
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
