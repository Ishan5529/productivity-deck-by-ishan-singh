import { Typography } from "neetoui";

import KanbanBoard from "./KanbanBoard";

const Kanban = () => {
  console.log("Kanban component rendered");

  return (
    <div className="ml-10 flex h-screen flex-col gap-y-10">
      <header>
        <Typography className="mt-8" style="h1" weight="bold">
          Kanban Mode
        </Typography>
      </header>
      <div className="container flex h-3/4 w-screen flex-row justify-between gap-x-10 bg-white">
        <KanbanBoard boardName="To-do" />
        <KanbanBoard boardName="In progress" />
        <KanbanBoard strike boardName="Done" />
      </div>
    </div>
  );
};

export default Kanban;
