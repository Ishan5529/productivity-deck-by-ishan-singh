import { create } from "zustand";

const useNotesStore = create(set => ({
  notes: JSON.parse(localStorage.getItem("notes")) || {},
  updateNote: (url, note) =>
    set(state => {
      const updatedNotes = { ...state.notes, [url]: note };
      localStorage.setItem("notes", JSON.stringify(updatedNotes));

      return { notes: updatedNotes };
    }),
}));

export default useNotesStore;
