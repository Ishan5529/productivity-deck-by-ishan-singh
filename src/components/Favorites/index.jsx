import React, { useState } from "react";

import { Favorite } from "neetoicons";
import { Typography, Input, Modal, Button, Tooltip } from "neetoui";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import useFavoritesStore from "stores/favoritesStore";
import useNotesStore from "stores/notesStore";

const Favorites = () => {
  const { t } = useTranslation();
  const { favorites, toggleFavorite } = useFavoritesStore();
  const { notes, updateNote } = useNotesStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState(null);

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
      <>
        <Helmet>
          <title>{t("favourites.tabTitle")}</title>
        </Helmet>
        <div className="ml-10 flex h-screen flex-col gap-12 overflow-y-auto">
          <Typography className="mt-8" style="h1" weight="bold">
            {t("favourites.title")}
          </Typography>
          <div className="flex h-3/5 w-full items-center justify-center">
            <Typography className="text-gray-500" style="h3">
              {t("favourites.empty")}
            </Typography>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t("favourites.tabTitle")}</title>
      </Helmet>
      <div className="ml-10 flex h-screen flex-col gap-12 overflow-y-auto">
        <Typography className="mt-8" style="h1" weight="bold">
          {t("favourites.title")}
        </Typography>
        <div className="flex flex-col gap-16 overflow-y-auto">
          {favoriteEntries.map(([url, title]) => (
            <div
              className="mr-16 flex flex-col gap-8 border-b-2 pb-2"
              key={url}
            >
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
                <Tooltip content={t("favourites.removeTooltip")} position="top">
                  <div>
                    <Favorite
                      className="cursor-pointer text-red-400"
                      fill="currentColor"
                      size="20"
                      onClick={() => handleToggleClick(url, title)}
                    />
                  </div>
                </Tooltip>
              </div>
              <Input
                className="mt-2"
                placeholder="Add a note..."
                style={{ height: "64px" }}
                value={notes[url] || ""}
                onChange={e => updateNote(url, e.target.value)}
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
              <h2 className="text-lg font-bold">{t("favourites.remove")}</h2>
              <p className="mt-2 text-gray-600">
                {t("favourites.removeMessage")}
              </p>
              <div className="mt-6 flex justify-end gap-4">
                <Button
                  label={t("util.cancel")}
                  style="secondary"
                  onClick={() => setIsModalOpen(false)}
                />
                <Button
                  label={t("util.remove")}
                  style="danger"
                  onClick={confirmToggleFavorite}
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Favorites;
