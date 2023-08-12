import React, { useRef, useEffect, useCallback } from 'react';

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  // The useEffect hook is used to update the callbackRef.current value 
  // whenever the callback function changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // The set function, when called, will set up a timeout to execute 
  // the current callback function (callbackRef.current()) after the 
  // specified delay (delay) in milliseconds. This allows you to schedule 
  // an action to occur after a certain time interval, using the most recent 
  // version of the callback function provided to the hook.

  // Inside the set function, a timeout is being set using the setTimeout 
  // function. This means that after a specified delay (in milliseconds), 
  // the provided callback function will be executed.

  // The callback function being passed to setTimeout is an arrow function
  // () => callbackRef.current(). This function retrieves the current value 
  // of the callbackRef reference and executes it. The reason for using 
  // this reference is to ensure that the most up-to-date callback function 
  // is used when the timeout triggers.

  // The delay value is taken from the dependency array of the useCallback 
  // hook. This means that the set function will be recreated if the delay 
  // value changes. If the delay value doesn't change, the previously created
  // set function reference will be used, which helps avoid unnecessary 
  // re-renders.

  // The timeoutRef.current reference is used to store the ID of the timeout 
  // created by setTimeout. This is important for the following reasons:
  // Clearing the Timeout: If you want to cancel or clear the timeout before 
  // it executes (for example, if a user performs some action that should 
  // prevent the timeout from firing), you can use the stored timeout ID to 
  // clear it using clearTimeout(timeoutRef.current).
  // timeoutRef.current is used in the `clear` function below.
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);


  // The purpose of this clear function is to cancel the timeout that was 
  // previously set using the set function. Here's what's happening:
  // - timeoutRef.current is checked to ensure that it has a value before 
  // attempting to clear the timeout. This check prevents issues where you 
  // might attempt to clear a timeout that hasn't been set yet.
  // - If timeoutRef.current has a value (which is the ID of the previously 
  // set timeout), clearTimeout(timeoutRef.current) is called to cancel the 
  // timeout before it executes.
  // - By using the timeoutRef.current value to clear the timeout, 
  // you're ensuring that the correct timeout is cleared, even if you've 
  // set a new timeout using the set function after the initial one was set. 
  // This helps prevent memory leaks and ensures that only the latest 
  // scheduled action will be executed, as well as keeping your timeouts 
  // well-managed and predictable.
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  // This useEffect is responsible for setting up the initial timeout and 
  // returning a cleanup function. Let's break down what's happening:
  // - When the component mounts or when the dependencies specified in the 
  // dependency array [delay, set, clear] change, this useEffect hook is 
  // triggered.
  // Inside the useEffect callback function:
  // - The set() function is called, which sets up a new timeout using the 
  // current values of the callback and delay.
  // The returned clear function is specified as the cleanup function.
  // The cleanup function will be executed when the component unmounts or 
  // when the dependencies [delay, set, clear] change. The purpose of this 
  // cleanup function is to clear the previously set timeout to prevent any 
  // potential memory leaks or unexpected behavior.
  // In practice, the clear and set functions are not expected to change 
  // during the normal lifecycle of a component. They are defined within the 
  // useTimeout hook and maintain their original functionality. The purpose 
  // of including them in the dependency array is to ensure that if there are 
  // any edge cases where they do change, the useEffect will adapt accordingly.
  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return [clear, reset];
}
