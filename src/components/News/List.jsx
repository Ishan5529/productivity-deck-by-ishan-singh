import { React } from "react";

import { NoData } from "components/common";
import { Favorite } from "neetoicons";
import { Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import { convertDate, isEmptyOrUndefined, fallbackImage } from "./constant";

const List = ({ articles, favorites, toggleFavorite }) => {
  const { t } = useTranslation();

  if (isEmptyOrUndefined(articles)) {
    return <NoData description={t("title.articleNotFound")} />;
  }

  return (
    <div className="flex flex-col items-center p-2 ">
      {articles?.map(article => (
        <div
          className="mt-10 flex w-full items-center justify-between border-b-2 px-10 py-4 shadow-sm"
          key={article.url}
        >
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex w-full flex-row items-center justify-between gap-x-2">
                <Typography className="flex-1" style="h2" weight="bold">
                  <a
                    className="text-gray-800"
                    href={article.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {article.title.padEnd(100, "\u00A0")}
                  </a>
                </Typography>
                <Favorite
                  className="cursor-pointer text-red-400"
                  fill={favorites[article.url] ? "currentColor" : "None"}
                  size="20"
                  onClick={() =>
                    toggleFavorite({
                      url: article.url,
                      title: article.title,
                    })
                  }
                />
              </div>
              <Typography className="text-gray-600" style="h4" weight="medium">
                {article.description.slice(0, 300)}
                <a
                  className="text-blue-300"
                  href={article.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  ...Know more
                </a>
              </Typography>
            </div>
            <Typography className="text-gray-500" style="body2">
              {convertDate(article.publishedAt)} &middot; {article.author}
            </Typography>
          </div>
          <div className="h-36 w-64 rounded-lg border-2">
            <img
              alt={article.title}
              className="h-full w-full rounded-lg object-fill"
              src={fallbackImage(article.urlToImage)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default List;
