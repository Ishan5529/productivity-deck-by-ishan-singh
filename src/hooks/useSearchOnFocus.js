import { useEffect } from "react";

export const useSearchOnFocus = ({ inputRef }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);
};
