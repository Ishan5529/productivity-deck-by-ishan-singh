import React from "react";

import { Filter, MenuHorizontal } from "neetoicons";
import { Typography } from "neetoui";

import SearchBar from "./SearchBar";

const Header = () => (
  <div className="flex h-20 items-center justify-between">
    <div className="flex flex-col items-center justify-start gap-y-4">
      <div className="container flex items-center justify-center gap-x-2">
        <Typography style="h1" weight="bold">
          News Mode
        </Typography>
        <MenuHorizontal className="mt-2" />
        <Filter className="mt-2 text-gray-500" size="20" />
      </div>
      <p className="text-gray-500">Latest news and updates</p>
    </div>
    <SearchBar />
  </div>
);

export default Header;
