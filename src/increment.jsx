import React, { useState, useEffect } from "react";
import "./index.css";








function Increment() {
  const [count, setCount] = useState(() => {
    // Retrieve count value from local storage or default to 0
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    // Update local storage whenever count changes
    localStorage.setItem("count", count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (

    
    <div className="total">

      <div className="forflexing">
        <div className="changingcolor">
        
          <div
            className="blue"
            style={{
              backgroundColor: `rgb(0, 0, ${Math.min(255, count * 5)})`,
              width: "700px", // Set width to 700px
              height: "30px"
            }}
          ></div>
          <div
            className="green"
            style={{
              backgroundColor: `rgb(0, ${Math.min(255, count * 10)}, 0)`,
              width: "700px", // Set width to 700px
              height: "30px"
            }}
          ></div>
          <div
            className="red"
            style={{
              backgroundColor: `rgb(${Math.min(255, count * 25)}, 0, 0)`,
              width: "700px", // Set width to 700px
              height: "30px"
            }}
          ></div>
        </div>
        <div className="incrementingbox1">
          <div className="incrementingbox">
            <h1 className="digit">{count}</h1>
            <div className="buttoncontainer">
              <button className="increment" onClick={handleIncrement}>
                Increment
              </button>
              <button className="decrement" onClick={handleDecrement}>
                Decrement
              </button>
              <button className="reset" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Increment;
