import React, { useEffect, useRef } from 'react';

export default function useUpdateEffect(callback, dependencies) {
  // Because in strice mode, useEffect runs twice
  const firstRenderRef = useRef(2);

  useEffect(() => {
    if (firstRenderRef.current > 0) {
      firstRenderRef.current = firstRenderRef.current - 1;
      return;
    }
    return callback();
  }, dependencies);
}
