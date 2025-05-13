import React from "react";

import { NoData as NeetoUINoData } from "neetoui";

const NoData = ({ description = "" }) => (
  <div className="flex h-full w-full items-center justify-center">
    <NeetoUINoData className="text-gray-500" {...{ description }} />
  </div>
);

export default NoData;
