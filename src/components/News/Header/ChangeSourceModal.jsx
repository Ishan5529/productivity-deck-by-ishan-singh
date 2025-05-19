import React, { useState } from "react";

import { Modal, Select, Button, Typography } from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

import { newsOptions } from "../constant";

const ChangeSourceModal = ({
  setIsOpenModal,
  isOpenModal,
  updateQueryParams,
}) => {
  const { t } = useTranslation();
  const [newsSource, setNewsSource] = useState({});

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  const handleSave = () => {
    updateQueryParams({ source: newsSource.value });
    handleCancel();
  };

  return (
    <Modal
      closeOnEsc
      closeOnOutsideClick
      isOpen={isOpenModal}
      size="medium"
      onClose={() => setIsOpenModal(false)}
    >
      <Modal.Header>
        <Typography style="h2" weight="bold">
          {t("news.changeSource")}
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <Select
          label="News source"
          options={newsOptions}
          placeholder={t("news.selectSource")}
          value={newsSource}
          onChange={setNewsSource}
        />
      </Modal.Body>
      <Modal.Footer className="flex justify-start">
        <Button
          className="bg-gray-700"
          label={t("util.save")}
          style="primary"
          onClick={handleSave}
        />
        <Button label={t("util.cancel")} style="text" onClick={handleCancel} />
      </Modal.Footer>
    </Modal>
  );
};

export default ChangeSourceModal;
