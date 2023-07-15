// search input component to serch of users by name or email or user id or password 
import React from "react";
import { StyledInput } from "./style";
import { FaSearch } from "react-icons/fa";

const Search = ({ onChange, value }) => {
  return (
    <div>
      <StyledInput
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      <FaSearch />
    </div>
  );
};

export default Search;
