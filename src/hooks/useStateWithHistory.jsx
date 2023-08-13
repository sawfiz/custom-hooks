import React, { useState, useRef, useCallback } from 'react';

export default function useStateWithHistory(
  defaultValue,
  { capacity = 10 } = {}
) {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (parameter) => {
      // Parameter can be either a callback function or a value
      const newValue =
        typeof parameter === 'function' ? parameter(value) : parameter;

      // If a callback function, the history is being modified
      if (typeof parameter === 'function') {
        // Remove the history from the modified point on
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        // Push new value to history
        historyRef.current.push(newValue);
        pointerRef.current += 1;

        // History should be bounded by capacity
        if (historyRef.current.length > capacity) {
          historyRef.current.shift();
          pointerRef.current = capacity - 1;
        }
      }

      setValue(newValue);
    },
    [value, capacity]
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index) => {
    if (index < 0 || index >= history.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
}
