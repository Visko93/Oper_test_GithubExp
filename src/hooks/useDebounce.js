import { useState, useEffect } from "react";

// Our hook
export default function useDebounce(username, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(username);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(username);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [username, delay]);

  return debouncedValue;
}
