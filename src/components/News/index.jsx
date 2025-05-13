import Header from "./Header";
import List from "./List";

export const News = () => (
  <div className="mx-10 my-2 flex flex-col gap-y-20">
    <div className="flex flex-col">
      <Header />
      <List />
    </div>
    <div className="h-4 w-10 self-end bg-gray-700">{}</div>
  </div>
);
