import { useTranslation } from "react-i18next";

const KanbanAdd = () => {
  const { t } = useTranslation();

  return (
    <div className="flex cursor-pointer items-center justify-center bg-white text-xl font-bold">
      {t("kanban.newTask")}
    </div>
  );
};

export default KanbanAdd;
