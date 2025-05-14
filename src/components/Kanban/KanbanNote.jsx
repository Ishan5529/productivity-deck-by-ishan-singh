import { useState } from "react";

import { Delete } from "neetoicons";
import { Input } from "neetoui";

const KanbanNote = ({ holdNote }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex cursor-pointer flex-row items-center justify-center gap-x-4 rounded-lg border border-gray-800 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
      onMouseDown={holdNote}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Input
        nakedInput
        className="text-2xl font-bold text-gray-800"
        placeholder="Enter task"
        size="medium"
        style={{ fontSize: "1.3rem" }}
        type=""
      />
      {isHovered && <Delete className="text-gray-400" />}
    </div>
  );
};

export default KanbanNote;
