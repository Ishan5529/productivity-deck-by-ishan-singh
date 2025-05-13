import React, { useState } from "react";

import { Filter as FilterIcon, MenuHorizontal } from "neetoicons";
import { Button, Tag, Typography } from "neetoui";

import ChangeSourceModal from "./ChangeSourceModal";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Header = ({
  updateQueryParams,
  searchTerm,
  dateFrom,
  dateTo,
  source,
  category,
  totalResults = "10",
}) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchKey, setSearchKey] = useState(searchTerm || "");

  const arr = [
    { label: "search", value: searchTerm },
    { label: "date", value: dateTo },
    { label: "source", value: source },
    { label: "category", value: category },
  ].filter(
    item => item.value !== null && item.value !== "" && item.value !== undefined
  );

  const isEmptyArr = arr.every(
    item => item.value === null || item.value === ""
  );

  const handleTagClose = item => {
    if (item.label === "search") {
      updateQueryParams({ searchTerm: "" });
      setSearchKey("");
    }

    if (item.label === "date") {
      updateQueryParams({ dateFrom: null, dateTo: null });
    }

    if (item.label === "source") {
      updateQueryParams({ source: null });
    }

    if (item.label === "category") {
      if (typeof category === "string") {
        updateQueryParams({
          category: null,
        });
      } else {
        updateQueryParams({
          category: category.filter(cat => cat !== item.value),
        });
      }
    }
  };

  const handleClearTag = () => {
    updateQueryParams({
      searchTerm: "",
      dateFrom: null,
      dateTo: null,
      source: null,
      category: null,
    });
    setSearchKey("");
  };

  return (
    <>
      <div className="my-4 flex h-20 items-center justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="container flex items-center gap-x-2">
            <Typography style="h1" weight="bold">
              News Mode
            </Typography>
            <div className="mt-2 cursor-pointer text-gray-500">
              <MenuHorizontal size="20" onClick={() => setIsOpenModal(true)} />
              <ChangeSourceModal
                {...{ setIsOpenModal, isOpenModal, updateQueryParams }}
              />
            </div>
            <FilterIcon
              className="mt-2 cursor-pointer text-gray-500"
              size="20"
              onClick={() => setIsOpenFilter(true)}
            />
          </div>
          {!isEmptyArr && (
            <div className="flex items-center justify-center gap-x-2">
              <Typography className="text-gray-500" style="body1">
                {totalResults} results for :
              </Typography>
              {arr.map(item => {
                const isArray = Array.isArray(item.value);

                return isArray ? (
                  item.value.map(val => (
                    <Tag
                      className="cursor-pointer"
                      key={val}
                      label={val}
                      style="secondary"
                      onClose={() => handleTagClose({ ...item, value: val })}
                    />
                  ))
                ) : (
                  <Tag
                    className="cursor-pointer"
                    key={item.label}
                    label={item.value}
                    style="secondary"
                    onClose={() => handleTagClose(item)}
                  />
                );
              })}
              <Button
                className="text-gray-500"
                size="small"
                style="text"
                onClick={handleClearTag}
              >
                Clear All
              </Button>
            </div>
          )}
        </div>
        <SearchBar {...{ updateQueryParams, setSearchKey, searchKey }} />
      </div>
      <Filter
        {...{
          setIsOpenFilter,
          updateQueryParams,
          setSearchKey,
          searchKey,
          isOpenFilter,
          dateFrom,
          dateTo,
        }}
      />
    </>
  );
};
export default Header;
