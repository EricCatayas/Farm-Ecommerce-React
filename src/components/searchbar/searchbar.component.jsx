import { useState } from "react";


const SearchBar = ({ handleSearch }) => {
  const [searchField, setSearchField] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(handleSearch && typeof(handleSearch) == 'function')
      handleSearch(searchField);    
  };

  const handleChange = (event) => {
    const {value} = event.target;
    setSearchField(value);
  };

  return (
    <form role="search" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          type="search"
          placeholder="Search products"
          onChange={handleChange}
        />
        <button className="btn small" type="submit" onClick={handleSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
