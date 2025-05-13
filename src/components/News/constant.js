import { either, isEmpty, isNil } from "ramda";

export const convertDate = dateStr => {
  const date = new Date(dateStr);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return formattedDate;
};

export const isEmptyOrUndefined = either(isEmpty, isNil);

export const DEFAULT_PAGE_SIZE = 2;

export const DEFAULT_PAGE_INDEX = 1;
