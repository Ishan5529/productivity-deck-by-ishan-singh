import { t } from "i18next";
import { Typography } from "neetoui";
import { Helmet } from "react-helmet";

import KanbanBoard from "./Board";

const Kanban = () => (
  <>
    <Helmet>
      <title>{t("kanban.tabTitle")}</title>
    </Helmet>
    <div className="ml-10 flex h-screen flex-col gap-y-10">
      <header>
        <Typography className="mt-8" style="h1" weight="bold">
          {t("kanban.title")}
        </Typography>
      </header>
      <div className="container flex h-3/4 w-screen flex-row justify-between gap-x-10 bg-white">
        <KanbanBoard boardName={t("kanban.todo")} />
        <KanbanBoard boardName={t("kanban.inProgress")} />
        <KanbanBoard strike boardName={t("kanban.done")} />
      </div>
    </div>
  </>
);

export default Kanban;
