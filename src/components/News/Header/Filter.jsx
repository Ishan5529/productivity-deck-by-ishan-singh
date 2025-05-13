import React, { useState } from "react";

import { Pane, Button, Input, DatePicker, Select } from "@bigbinary/neetoui";

import { newsCategoryOptions } from "../constant";

const Filter = ({
  setIsOpenFilter,
  updateQueryParams,
  setSearchKey,
  searchKey,
  isOpenFilter,
  dateFrom,
  dateTo,
}) => {
  const [date, setDate] = useState({
    dateFrom: dateFrom || "",
    dateTo: dateTo || "",
  });

  const [newsCategory, setNewsCategory] = useState([]);

  const handleFilter = () => {
    updateQueryParams({
      searchTerm: searchKey,
      dateFrom: date.dateFrom,
      dateTo: date.dateTo,
      category: newsCategory.map(item => item.value),
    });
    handleClose();
  };

  const ClearFilter = () => {
    setSearchKey("");
    setDate({
      dateFrom: "",
      dateTo: "",
    });
    setNewsCategory([]);
  };

  const handleClose = () => {
    setIsOpenFilter(false);
  };

  return (
    <Pane isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)}>
      <Pane.Header>
        <h2 className="text-xl font-bold">Filters</h2>
      </Pane.Header>
      <Pane.Body>
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold">Keyword or phrase</label>
            <Input
              required
              className="w-96"
              placeholder="Enter keyword"
              value={searchKey}
              onChange={({ target: { value } }) => setSearchKey(value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold">Category</label>
            <div className="flex space-x-2">
              <Select
                isClearable
                isMulti
                isSearchable
                className="w-96"
                options={newsCategoryOptions}
                placeholder="category"
                value={newsCategory}
                onChange={setNewsCategory}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold">
              Date of Publication From
            </label>
            <DatePicker
              className="w-96"
              format="YYYY-MM-DD"
              placeholder="YYYY-MM-DD"
              value={date.dateFrom}
              onChange={(_, dateStr) =>
                setDate(prev => ({
                  ...prev,
                  dateFrom: dateStr,
                }))
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold">
              Date of Publication To
            </label>
            <DatePicker
              className="w-96"
              format="YYYY-MM-DD"
              placeholder="YYYY-MM-DD"
              value={date.dateTo}
              onChange={(_, dateStr) =>
                setDate(prev => ({
                  ...prev,
                  dateTo: dateStr,
                }))
              }
            />
          </div>
        </div>
      </Pane.Body>
      <Pane.Footer className="flex space-x-2">
        <Button label="Done" style="primary" onClick={handleFilter} />
        <Button label="Clear filters" style="secondary" onClick={ClearFilter} />
      </Pane.Footer>
    </Pane>
  );
};

export default Filter;
