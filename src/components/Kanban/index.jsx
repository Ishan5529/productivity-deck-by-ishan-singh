import { useState } from "react";

import { Typography } from "neetoui";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import KanbanBoard from "./Board";

import useKanbanStore from "../../stores/kanbanStore";
import { moveNote } from "../../utils/moveNote";

const Kanban = () => {
  const [activeNote, setActiveNote] = useState([]);
  const { notes, setNotes } = useKanbanStore();

  const { t } = useTranslation();

  const onDrop = (status, position) => {
    const [sourceBoard, sourceIndex] = activeNote;
    const sourceNotes = notes[sourceBoard] || [];
    const targetNotes = notes[status] || [];
    const movedNote = sourceNotes[sourceIndex];

    if (sourceBoard === status) {
      setNotes(sourceBoard, moveNote(sourceNotes, sourceIndex, position));
    } else {
      const updatedSourceNotes = sourceNotes.filter(
        (_, index) => index !== sourceIndex
      );

      const updatedTargetNotes = [
        ...targetNotes.slice(0, position),
        movedNote,
        ...targetNotes.slice(position),
      ];
      setNotes(sourceBoard, updatedSourceNotes);
      setNotes(status, updatedTargetNotes);
    }

    setActiveNote([]);
  };

  return (
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
          <KanbanBoard
            boardName={t("kanban.todo")}
            setActiveNote={setActiveNote}
            onDrop={onDrop}
          />
          <KanbanBoard
            boardName={t("kanban.inProgress")}
            setActiveNote={setActiveNote}
            onDrop={onDrop}
          />
          <KanbanBoard
            strike
            boardName={t("kanban.done")}
            setActiveNote={setActiveNote}
            onDrop={onDrop}
          />
        </div>
      </div>
    </>
  );
};

export default Kanban;
