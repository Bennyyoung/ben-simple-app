import React from 'react'

const Search = ({handleSearch}) => {
 return (
  <div>
   <input
    type="text"
    placeholder="Search"
    className="form-control"
    onChange={handleSearch}
   />
  </div>
 )
}

export default Search