import KanbanAdd from "./KanbanAdd";
import KanbanBoardHeader from "./KanbanBoardHeader";
import KanbanNote from "./KanbanNote";

const KanbanBoard = ({ boardName }) => {
  console.log("temp");

  return (
    <div className="container flex h-full w-full flex-col justify-between gap-y-10 rounded-lg border-2 border-gray-400 bg-white px-8 py-6 shadow-md">
      <div className="flex flex-col justify-center gap-y-10">
        <KanbanBoardHeader boardName={boardName} />
        <div className="flex flex-col gap-y-4">
          <KanbanNote />
          <KanbanNote note="hi" />
        </div>
      </div>
      <KanbanAdd />
    </div>
  );
};

export default KanbanBoard;
