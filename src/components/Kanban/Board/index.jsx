import { useState, useEffect } from "react";

import KanbanAdd from "./Add";
import KanbanBoardHeader from "./header";
import KanbanNote from "./note";

const KanbanBoard = ({ boardName, strike }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(`kanban-notes-${boardName}`);

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem(`kanban-notes-${boardName}`, JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setNotes([...notes, ""]);
  };

  const updateNote = (index, value) => {
    setNotes(prevNotes =>
      prevNotes.map((note, i) => (i === index ? value : note))
    );
  };

  const removeNote = index => {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="container flex h-full w-full flex-col justify-between gap-y-10 rounded-lg border-2 border-gray-400 bg-white px-8 py-6 shadow-md">
      <div className="flex flex-col justify-center gap-y-10 overflow-y-auto">
        <KanbanBoardHeader boardName={boardName} />
        <div className="flex flex-col gap-y-4 overflow-y-auto">
          {notes.map((note, index) => (
            <KanbanNote
              key={index}
              strike={strike}
              value={note}
              onChange={value => updateNote(index, value)}
              onDelete={() => removeNote(index)}
            />
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
