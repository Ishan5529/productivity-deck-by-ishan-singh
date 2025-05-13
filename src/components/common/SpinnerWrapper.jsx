import React from "react";

import { Spinner } from "neetoui";

const SpinnerWrapper = () => (
  <div className="flex h-full items-center justify-center">
    <div className="text-center">
      <Spinner size="lg" />
    </div>
  </div>
);

export default SpinnerWrapper;
