import React, { useRef, useState } from "react";

import { Input } from "@bigbinary/neetoui";
import { useSearchOnFocus } from "hooks/useSearchOnFocus";
import { Search } from "neetoicons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);
  useSearchOnFocus({ inputRef });

  const handleChange = value => {
    setSearchTerm(value);
  };

  return (
    <div className="mr-10">
      <Input
        className="w-72 border-gray-300"
        placeholder="Search for article"
        ref={inputRef}
        suffix={<Search />}
        type="search"
        value={searchTerm}
        onChange={({ target: { value } }) => {
          handleChange(value);
        }}
      />
    </div>
  );
};

export default SearchBar;
