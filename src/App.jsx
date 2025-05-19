import { React } from "react";

import { SideBar } from "components/common";
import PageNotFound from "components/common/PageNotFound";
import Favorites from "components/Favorites";
import Kanban from "components/Kanban";
import News from "components/News";
import Pomodoro from "components/Pomodoro";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "routes";

const App = () => (
  <div className="flex h-screen">
    <SideBar />
    <div className="flex-1 overflow-hidden p-4">
      <Switch>
        <Route exact component={Kanban} path={routes.productivity.kanban} />
        <Route exact component={Pomodoro} path={routes.productivity.pomodoro} />
        <Route exact component={News} path={routes.productivity.news} />
        <Route
          exact
          component={Favorites}
          path={routes.productivity.favorite}
        />
        <Redirect exact from={routes.root} to={routes.productivity.kanban} />
        <Route exact component={PageNotFound} path={routes.pageNotFound} />
      </Switch>
    </div>
  </div>
);

export default App;
