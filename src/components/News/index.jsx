import { useNewsFetch } from "hooks/reactQuery/useNewsApi";

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "./constant";
import Header from "./Header";
import List from "./List";

export const News = () => {
  const searchTerm = "IndoPakWar"; // This will be replaced with a state or a prop

  const response = useNewsFetch({
    q: searchTerm,
    page: DEFAULT_PAGE_INDEX,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  console.log("response", response);

  return (
    <div className="mx-10 my-2 flex flex-col gap-y-20">
      <div className="flex flex-col">
        <Header />
        <List />
      </div>
      <div className="h-4 w-10 self-end bg-gray-700">{}</div>
    </div>
  );
};
