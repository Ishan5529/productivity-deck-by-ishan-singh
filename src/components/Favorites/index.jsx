import React, { useState, useEffect } from "react";

import { Favorite } from "neetoicons";
import { Typography, Input, Modal, Button } from "neetoui";

const Favorites = ({ favorites, toggleFavorite }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (url, note) => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [url]: note,
    }));
  };

  const handleToggleClick = (url, title) => {
    setSelectedFavorite({ url, title });
    setIsModalOpen(true);
  };

  const confirmToggleFavorite = () => {
    if (selectedFavorite) {
      toggleFavorite(selectedFavorite);
    }
    setIsModalOpen(false);
    setSelectedFavorite(null);
  };

  const favoriteEntries = Object.entries(favorites);

  if (favoriteEntries.length === 0) {
    return (
      <Typography className="text-gray-500" style="h4">
        No favorites added yet.
      </Typography>
    );
  }

  return (
    <div className="ml-10 flex h-screen flex-col gap-12 overflow-y-auto">
      <Typography className="mt-8" style="h1" weight="bold">
        Favourites
      </Typography>
      <div className="flex flex-col gap-16 overflow-y-auto">
        {favoriteEntries.map(([url, title]) => (
          <div className="mr-16 flex flex-col gap-8 border-b-2 pb-2" key={url}>
            <div className="flex flex-row items-center justify-between">
              <Typography style="h3" weight="bold">
                <a
                  className="text-gray-800"
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {title}
                </a>
              </Typography>
              <Favorite
                className="cursor-pointer text-red-400"
                fill="currentColor"
                size="20"
                onClick={() => handleToggleClick(url, title)}
              />
            </div>
            <Input
              className="mt-2"
              placeholder="Add a note..."
              style={{ height: "64px" }}
              value={notes[url] || ""}
              onChange={e => handleNoteChange(url, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="h-8" />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          size="small"
          onClose={() => setIsModalOpen(false)}
        >
          <div className="m-4">
            <Typography className="m-4" style="h2" weight="bold">
              Remove from favourites?
            </Typography>
            <div className="mt-6 flex justify-end gap-4">
              <Button
                label="Cancel"
                style="secondary"
                onClick={() => setIsModalOpen(false)}
              />
              <Button
                label="Remove"
                style="danger"
                onClick={confirmToggleFavorite}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Favorites;
