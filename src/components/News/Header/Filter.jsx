import React, { useState } from "react";

import {
  Pane,
  Button,
  Input,
  DatePicker,
  Select,
  Tooltip,
} from "@bigbinary/neetoui";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [date, setDate] = useState({
    dateFrom: dateFrom || null,
    dateTo: dateTo || null,
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
      dateFrom: null,
      dateTo: "",
    });
    setNewsCategory([]);
  };

  const handleClose = () => {
    setIsOpenFilter(false);
  };

  const isDateValid = () => {
    const minDate = new Date("1970-01-01");
    const fromDate = date.dateFrom ? new Date(date.dateFrom) : null;
    const toDate = date.dateTo ? new Date(date.dateTo) : null;

    return (!fromDate || fromDate >= minDate) && (!toDate || toDate >= minDate);
  };

  return (
    <Pane isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)}>
      <Pane.Header>
        <h2 className="text-xl font-bold">{t("news.filter.title")}</h2>
      </Pane.Header>
      <Pane.Body>
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold">
              {t("news.filter.key/phrase")}
            </label>
            <Input
              required
              className="w-96"
              placeholder={t("news.filter.k/phrasePlaceholder")}
              value={searchKey}
              onChange={({ target: { value } }) => setSearchKey(value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold">
              {t("news.filter.category")}
            </label>
            <div className="flex space-x-2">
              <Select
                isClearable
                isMulti
                isSearchable
                className="w-96"
                options={newsCategoryOptions}
                placeholder={t("news.filter.categoryPlaceholder")}
                value={newsCategory}
                onChange={setNewsCategory}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold">
              {t("news.filter.dateFrom")}
            </label>
            <DatePicker
              className="w-96"
              format="YYYY-MM-DD"
              placeholder="YYYY-MM-DD"
              size="large"
              value={date.dateFrom}
              onChange={(_, dateStr) =>
                setDate(prev => ({
                  ...prev,
                  dateFrom: dateStr,
                }))
              }
            />
            <label className="text-sm font-semibold">
              {t("news.filter.dateTo")}
            </label>
            <DatePicker
              className="w-96"
              format="YYYY-MM-DD"
              placeholder="YYYY-MM-DD"
              size="large"
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
        {!isDateValid() ? (
          <Tooltip content={t("news.filter.invalidDateMessage")} position="top">
            <div>
              <Button
                disabled
                className="bg-gray-700"
                label={t("util.apply")}
                style="primary"
                onClick={handleFilter}
              />
            </div>
          </Tooltip>
        ) : (
          <Button
            className="bg-gray-700"
            label={t("util.apply")}
            style="primary"
            onClick={handleFilter}
          />
        )}
        <Button
          label={t("news.filter.clear")}
          style="secondary"
          onClick={ClearFilter}
        />
      </Pane.Footer>
    </Pane>
  );
};

export default Filter;
