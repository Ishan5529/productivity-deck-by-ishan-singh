import React from "react";

import classNames from "classnames";
import { Book, Globe, List, TimeTracking } from "neetoicons";
import {
  NavLink,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { routes } from "routes";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-20 flex-col items-center space-y-6 border-2 py-6 text-white shadow-sm">
      <div className="rounded-lg bg-gray-800 p-2 text-2xl font-bold">
        <Book />
      </div>
      <NavLink
        to={routes.productivity.index}
        className={classNames({
          "text-blue-400": pathname === routes.productivity.index,
          "text-gray-400": pathname !== routes.productivity.index,
        })}
      >
        <List />
      </NavLink>
      <NavLink
        to={routes.productivity.pomodoro}
        className={classNames({
          "text-blue-400": pathname === routes.productivity.pomodoro,
          "text-gray-400": pathname !== routes.productivity.pomodoro,
        })}
      >
        <TimeTracking />
      </NavLink>
      <NavLink
        to={routes.productivity.news}
        className={classNames({
          "text-blue-400": pathname === routes.productivity.news,
          "text-gray-400": pathname !== routes.productivity.news,
        })}
      >
        <Globe />
      </NavLink>
    </div>
  );
};

export default SideBar;
