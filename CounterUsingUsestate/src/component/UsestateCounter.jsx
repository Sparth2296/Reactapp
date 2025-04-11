import React, { useState } from "react";
import "../assets/Counter.css";

const UsestateCounter = () => {
  const [counter, setCountre] = useState(0);

  const increment = () => {
    setCountre(counter + 1);
  };
  const decrement = () => {
    if (counter < 0) {
      setCountre(0);
    }
    setCountre(counter - 1);
  };
  const reset = () => {
    setCountre(0);
  };

  console.log(counter);

  return (
    <div>
      <div className="cardOFCounter">
        <div className="counter-number">
          <h3>{counter}</h3>
        </div>

        <div className="counter-in-de">

          {counter == 0 ? (
            <button onClick={decrement} disabled className="decriment-btn">
              <h2>-</h2>
            </button>
          ) : (
            <button onClick={decrement}><h2>-</h2></button>
          )}
          <button onClick={increment}><h2>+</h2></button>
        </div>
        <div className="counter-reset">
          <button onClick={reset}>
           
            <h2> <i class="fa-solid fa-rotate-right"></i> Reset</h2>
                </button>
        </div>
      </div>
    </div>
  );
};

export default UsestateCounter;
