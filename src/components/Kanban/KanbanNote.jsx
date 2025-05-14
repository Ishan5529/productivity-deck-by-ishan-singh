import { useState } from "react";

import { Delete } from "neetoicons";
import { Input } from "neetoui";

const KanbanNote = ({ value, onChange, onDelete, strike }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex cursor-pointer flex-row items-center justify-center gap-x-4 rounded-lg border border-gray-800 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Input
        nakedInput
        placeholder="Enter task"
        size="medium"
        style={{ fontSize: "1.3rem" }}
        value={value}
        className={`text-2xl font-bold text-gray-800 ${
          strike ? "line-through" : ""
        }`}
        onChange={e => onChange(e.target.value)}
      />
      {isHovered && (
        <div
          onClick={() => {
            console.log("Delete Clicked");
            onDelete();
          }}
        >
          <Delete className="cursor-pointer text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default KanbanNote;
