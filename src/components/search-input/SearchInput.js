import React from "react";
import "./SearchInput.css";
const SearchInput = (props) => {
  return (
    <div className="SearchInput">
      <label>
        <b>Search for country:</b>{" "}
      </label>
      <input type="text" onChange={props.search} />
    </div>
  );
};
export default SearchInput;
