import React, { useState } from "react";

import { Modal, Select, Button, Typography } from "@bigbinary/neetoui";

import { newsOptions } from "../constant";

const ChangeSourceModal = ({
  setIsOpenModal,
  isOpenModal,
  updateQueryParams,
}) => {
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
          Change news source
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <Select
          label="News source"
          options={newsOptions}
          placeholder="Select news source"
          value={newsSource}
          onChange={setNewsSource}
        />
      </Modal.Body>
      <Modal.Footer className="flex justify-start">
        <Button label="Save" style="primary" onClick={handleSave} />
        <Button label="Cancel" style="text" onClick={handleCancel} />
      </Modal.Footer>
    </Modal>
  );
};

export default ChangeSourceModal;
