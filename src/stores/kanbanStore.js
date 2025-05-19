import { create } from "zustand";

const useKanbanStore = create(set => ({
  notes: JSON.parse(localStorage.getItem("kanban-notes")) || {
    "To-do": [],
    "In progress": [],
    Done: [],
  },
  setNotes: (boardName, updatedNotes) =>
    set(state => {
      const newNotes = { ...state.notes, [boardName]: updatedNotes };
      localStorage.setItem("kanban-notes", JSON.stringify(newNotes));

      return { notes: newNotes };
    }),
}));

export default useKanbanStore;
