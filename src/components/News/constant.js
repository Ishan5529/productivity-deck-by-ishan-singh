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

export const newsCategoryOptions = [
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "General", value: "general" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
  { label: "Technology", value: "technology" },
];

export const newsOptions = [
  { label: "BBC News", value: "bbc-news" },
  { label: "The Verge", value: "the-verge" },
  { label: "Business Insider", value: "business-insider" },
  { label: "Time", value: "time" },
  { label: "The Next Web", value: "the-next-web" },
  { label: "ABC News", value: "abc-news" },
  { label: "Engadget", value: "engadget" },
  { label: "Entertainment Weekly", value: "entertainment-weekly" },
  { label: "ESPN", value: "espn" },
  { label: "Financial Post", value: "financial-post" },
];

export const fallbackImage = poster => {
  if (poster === "N/A" || isNil(poster)) {
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBGOs2225fFqTfnl5EKlrEUBn5-drby1x3Q&s";
  }

  return poster;
};
