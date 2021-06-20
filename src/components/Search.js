import React, { useRef } from "react";

const Search = (props) => {
  const inputEl = useRef("");

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div>
      <input
        className={props.style}
        ref={inputEl}
        type="text"
        placeholder="Search"
        value={props.term}
        onChange={getSearchTerm}
      />
    </div>
  );
};

export default Search;
