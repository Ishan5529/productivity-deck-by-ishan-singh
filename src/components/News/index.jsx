import SpinnerWrapper from "components/common/SpinnerWrapper";
import { useNewsFetch } from "hooks/reactQuery/useNewsApi";
import useFuncDebounce from "hooks/useFuncDebounce";
import useQueryParams from "hooks/useQueryParams";
import { filterNonNull } from "neetocist";
import { Pagination } from "neetoui";
import { isEmpty } from "ramda";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { routes } from "routes";
import useFavoritesStore from "stores/favoritesStore";
import { buildUrl } from "utils/url";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./constant";
import Header from "./Header";
import List from "./List";

const News = () => {
  const { t } = useTranslation();
  const { favorites, toggleFavorite } = useFavoritesStore();

  const {
    page,
    searchTerm = "",
    dateFrom = null,
    dateTo = null,
    source = null,
    category,
  } = useQueryParams();
  const history = useHistory();

  const defaultSource = "bbc-news";
  const isDefaultQuery =
    isEmpty(searchTerm) && !dateFrom && !dateTo && !source && !category;

  const params = {
    searchTerm,
    page: Number(page) || DEFAULT_PAGE_INDEX,
    dateFrom,
    dateTo,
    source: isDefaultQuery ? defaultSource : source,
    category,
  };

  const { data: { articles, totalResults } = {}, isFetching } = useNewsFetch({
    q: isDefaultQuery ? undefined : searchTerm,
    page: Number(page) || DEFAULT_PAGE_INDEX,
    pageSize: DEFAULT_PAGE_SIZE,
    from: dateFrom,
    to: dateTo,
    sources: isDefaultQuery ? defaultSource : source,
  });

  const handlePageNavigation = page =>
    history.replace(
      buildUrl(
        routes.productivity.news,
        filterNonNull({
          ...params,
          page,
        })
      )
    );

  const updateQueryParams = useFuncDebounce(updatedValue => {
    const updatedParam = {
      ...params,
      ...updatedValue,
    };

    history.push(
      isEmpty(updatedParam.searchTerm)
        ? buildUrl(routes.productivity.news)
        : buildUrl(routes.productivity.news, filterNonNull(updatedParam))
    );
  });

  return (
    <>
      <Helmet>
        <title>{t("news.tabTitle")}</title>
      </Helmet>
      <div className="mx-10 flex h-full flex-col">
        <Header
          {...{
            updateQueryParams,
            searchTerm,
            dateFrom,
            dateTo,
            source,
            category,
            totalResults,
          }}
        />
        {isFetching ? (
          <SpinnerWrapper />
        ) : (
          <List
            {...{
              articles,
              searchTerm,
              favorites,
              toggleFavorite,
              dateFrom,
              dateTo,
            }}
          />
        )}
        <div className="mt-10 self-end">
          <Pagination
            className="neetix-pagination"
            count={totalResults || 1}
            navigate={handlePageNavigation}
            pageNo={Number(page) || DEFAULT_PAGE_INDEX}
            pageSize={DEFAULT_PAGE_SIZE}
          />
        </div>
      </div>
    </>
  );
};

export default News;
