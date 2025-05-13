import SpinnerWrapper from "components/common/SpinnerWrapper";
import { useNewsFetch } from "hooks/reactQuery/useNewsApi";
import useFuncDebounce from "hooks/useFuncDebounce";
import useQueryParams from "hooks/useQueryParams";
import { filterNonNull } from "neetocist";
import { Pagination } from "neetoui";
import { isEmpty } from "ramda";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { routes } from "routes";
import { buildUrl } from "utils/url";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./constant";
import Header from "./Header";
import List from "./List";

export const News = () => {
  const { page, searchTerm = "" } = useQueryParams();
  const history = useHistory();

  const params = {
    searchTerm,
    page: Number(page) || DEFAULT_PAGE_INDEX,
    pageSize: DEFAULT_PAGE_SIZE,
  };

  const { data: { articles, totalResults } = {}, isFetching } = useNewsFetch({
    q: searchTerm,
    page: Number(page) || DEFAULT_PAGE_INDEX,
    pageSize: DEFAULT_PAGE_SIZE,
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
    <div className="mx-10 flex h-full flex-col">
      <Header {...{ updateQueryParams, searchTerm }} />
      {isFetching ? <SpinnerWrapper /> : <List {...{ articles, searchTerm }} />}
      <div className="mt-10 self-end">
        <Pagination
          count={totalResults || 1}
          navigate={handlePageNavigation}
          pageNo={Number(page) || DEFAULT_PAGE_INDEX}
          pageSize={DEFAULT_PAGE_SIZE}
        />
      </div>
    </div>
  );
};
