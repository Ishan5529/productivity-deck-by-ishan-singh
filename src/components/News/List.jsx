import { React } from "react";

import NoData from "components/common/NoData";
import { Favorite } from "neetoicons";
import { Typography } from "neetoui";
import { isEmpty } from "ramda";
import { useTranslation } from "react-i18next";

import { convertDate, isEmptyOrUndefined, fallbackImage } from "./constant";

const List = ({ articles, searchTerm, favorites, toggleFavorite }) => {
  const { t } = useTranslation();

  if (isEmptyOrUndefined(articles)) {
    return (
      <NoData
        description={
          !isEmpty(searchTerm)
            ? t("title.articleNotFound")
            : t("title.emptySearchKey")
        }
      />
    );
  }

  return (
    <div className="flex flex-col items-center p-2 ">
      {articles?.map(article => (
        <div
          className="mt-10 flex w-full items-start justify-between border-b-2 px-10 py-4 shadow-sm"
          key={article.url}
        >
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="container flex flex-row justify-between gap-x-2">
                <Typography style="h2" weight="bold">
                  <a
                    className="text-gray-800"
                    href={article.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {article.title}
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
