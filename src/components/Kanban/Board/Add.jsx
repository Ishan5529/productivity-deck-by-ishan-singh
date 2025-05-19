import { t } from "i18next";

const KanbanAdd = () => (
  <div className="flex cursor-pointer items-center justify-center bg-white text-xl font-bold">
    {t("kanban.newTask")}
  </div>
);

export default KanbanAdd;
