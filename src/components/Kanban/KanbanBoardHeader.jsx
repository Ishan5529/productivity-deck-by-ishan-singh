import { Typography } from "neetoui";

const KanbanBoardHeader = ({ boardName }) => (
  <Typography style="h2" weight="bold">
    {boardName}
  </Typography>
);

export default KanbanBoardHeader;
