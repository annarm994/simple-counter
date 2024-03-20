import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  const incrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1); // This will not increment the count by 2 as expected
  };

  const correctIncrementTwice = () => {
    setCount(prevCount => prevCount + 2); // Using state updater function to correctly increment by 2
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
};

export default Counter;