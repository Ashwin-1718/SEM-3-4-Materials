import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;
  const isMaxReached = count >= maxLimit;

  const increaseCount = () => {
    if (!isMaxReached) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Current Count: {count}</h2>
      
      {isMaxReached && (
        <p className="warning">You've reached the maximum count!</p>
      )}

      <div className="buttons">
        <button 
          onClick={increaseCount} 
          disabled={isMaxReached}
          className="increment-btn"
        >
          Increase
        </button>
        
        <button 
          onClick={decreaseCount}
          className="decrement-btn"
        >
          Decrease
        </button>
        
        <button 
          onClick={resetCount}
          className="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;