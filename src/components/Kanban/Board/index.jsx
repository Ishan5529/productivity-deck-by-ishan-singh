import React from "react";

import KanbanAdd from "./Add";
import DropArea from "./dropArea";
import KanbanBoardHeader from "./header";
import KanbanNote from "./note";

import useKanbanStore from "../../../stores/kanbanStore";

const KanbanBoard = ({ boardName, strike, setActiveNote, onDrop }) => {
  const { notes, setNotes } = useKanbanStore();

  const boardNotes = notes[boardName] || [];

  const addNote = () => {
    setNotes(boardName, [...boardNotes, ""]);
  };

  const updateNote = (index, value) => {
    setNotes(
      boardName,
      boardNotes.map((note, i) => (i === index ? value : note))
    );
  };

  const removeNote = index => {
    setNotes(
      boardName,
      boardNotes.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="container flex h-full w-full flex-col justify-between gap-y-10 rounded-lg border-2 border-gray-400 bg-white px-8 py-6 shadow-md">
      <div className="flex h-full flex-col justify-center gap-y-10 overflow-y-auto">
        <KanbanBoardHeader boardName={boardName} />
        <div className="flex h-full flex-col gap-y-2 overflow-y-auto">
          <DropArea onDrop={() => onDrop(boardName, 0)} />
          {boardNotes.map((note, index) => (
            <>
              <KanbanNote
                boardName={boardName}
                index={index}
                key={index}
                setActiveNote={setActiveNote}
                strike={strike}
                value={note}
                onChange={value => updateNote(index, value)}
                onDelete={() => removeNote(index)}
              />
              <DropArea onDrop={() => onDrop(boardName, index + 1)} />
            </>
          ))}
        </div>
      </div>
      <div onClick={addNote}>
        <KanbanAdd />
      </div>
    </div>
  );
};

export default KanbanBoard;
