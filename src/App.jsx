import { React, useState } from "react";

import { SideBar } from "components/common";
import PageNotFound from "components/common/PageNotFound";
import Favorites from "components/Favorites";
import Kanban from "components/Kanban";
import News from "components/News";
import Pomodoro from "components/Pomodoro";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "routes";

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  const toggleFavorite = ({ url, title }) => {
    setFavorites(prevFavorites => {
      const updatedFavorites = { ...prevFavorites };
      if (updatedFavorites[url]) {
        delete updatedFavorites[url];
      } else {
        updatedFavorites[url] = title;
      }
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 overflow-hidden p-4">
        <Switch>
          <Route exact component={Kanban} path={routes.productivity.index} />
          <Route
            exact
            component={Pomodoro}
            path={routes.productivity.pomodoro}
          />
          <Route
            exact
            path={routes.productivity.news}
            render={() => (
              <News favorites={favorites} toggleFavorite={toggleFavorite} />
            )}
          />
          <Route
            exact
            path={routes.productivity.favorite}
            render={() => (
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            )}
          />
          <Redirect exact from={routes.root} to={routes.productivity.index} />
          <Route exact component={PageNotFound} path={routes.pageNotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
