import React from "react";

import classNames from "classnames";
import { Book, Globe, List, TimeTracking, Favorite } from "neetoicons";
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
        to={routes.productivity.kanban}
        className={classNames({
          "text-blue-400": pathname === routes.productivity.kanban,
          "text-gray-400": pathname !== routes.productivity.kanban,
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
      <NavLink
        to={routes.productivity.favorite}
        className={classNames({
          "text-red-400": pathname === routes.productivity.favorite,
          "text-gray-400": pathname !== routes.productivity.favorite,
        })}
      >
        <Favorite
          fill={
            pathname === routes.productivity.favorite ? "currentColor" : "none"
          }
        />
      </NavLink>
    </div>
  );
};

export default SideBar;
