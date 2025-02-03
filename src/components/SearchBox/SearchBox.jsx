import { useState } from 'react'
import PropTypes from "prop-types";
import './SearchBox.css';
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
     <div className="search-box">
      <label htmlFor="search" className="search-label">
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        onChange={handleFilterChange} 
        className="search-input"
        placeholder="Search by name..."
      />
    </div>
  );
};

export default SearchBox;