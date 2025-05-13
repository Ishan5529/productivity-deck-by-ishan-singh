import { NoData } from "neetoui";
import { useTranslation } from "react-i18next";
import withT from "utils/withT";

import { routes } from "../../routes";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen items-center justify-center">
      <NoData
        title={t("pageNotFound.title")}
        primaryButtonProps={{
          label: t("pageNotFound.label"),
          className: "bg-neutral-800 hover:bg-neutral-950",
          to: routes.productivity.index,
        }}
      />
    </div>
  );
};
export default withT(PageNotFound);
