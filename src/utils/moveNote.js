export const moveNote = (notes, initialIndex, finalIndex) => {
  const updatedNotes = [...notes];
  const [removed] = updatedNotes.splice(initialIndex, 1);
  updatedNotes.splice(finalIndex, 0, removed);

  return updatedNotes;
};
