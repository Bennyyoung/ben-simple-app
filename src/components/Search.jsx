import React from 'react'

const Search = ({handleFilter}) => {
 return (
  <div>
   <input
    type="text"
    placeholder="Search"
    className="form-control"
    onChange={handleFilter}
   />
  </div>
 )
}

export default Search