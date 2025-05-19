import { useState } from "react";

import { Delete } from "neetoicons";
import { Input, Modal, Button } from "neetoui";
import { useTranslation } from "react-i18next";

const KanbanNote = ({ value, onChange, onDelete, strike }) => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex cursor-pointer flex-row items-center justify-center gap-x-4 rounded-lg border border-gray-800 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Input
          nakedInput
          placeholder="Enter task"
          size="medium"
          style={{ fontSize: "1.3rem" }}
          value={value}
          className={`text-2xl font-bold text-gray-800 ${
            strike ? "line-through" : ""
          }`}
          onChange={({ target: { value } }) => onChange(value)}
        />
        {isHovered && (
          <div
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <Delete className="cursor-pointer text-gray-400" />
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          size="small"
          onClose={() => setIsModalOpen(false)}
        >
          <div className="p-4">
            <h2 className="text-lg font-bold">{t("kanban.remove")}</h2>
            <p className="mt-2 text-gray-600">
              {t("kanban.deleteConfirmation")}
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button
                label={t("util.cancel")}
                style="secondary"
                onClick={() => setIsModalOpen(false)}
              />
              <Button
                label={t("util.delete")}
                style="danger"
                onClick={handleDelete}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default KanbanNote;
