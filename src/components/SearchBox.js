import React from "react";

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return <>
    <input className='w-50' type='search' placeholder="search robofriends" value={searchTerm} onChange={onSearchChange} />
  </>
}

export default SearchBox