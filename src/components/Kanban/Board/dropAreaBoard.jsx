import { useState } from "react";

import { useTranslation } from "react-i18next";

const DropAreaBoard = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  const { t } = useTranslation();

  return (
    <section
      className={
        showDrop
          ? "m-y-4 absolute inset-0 flex flex-shrink-0 items-center justify-center border border-dashed border-gray-400 p-[15px] text-xl font-bold text-gray-800 opacity-100 transition-all duration-200 ease-in-out"
          : "m-y-0 relative h-full w-full opacity-0"
      }
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDragOver={event => event.preventDefault()}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
    >
      {t("kanban.drop")}
    </section>
  );
};
export default DropAreaBoard;
