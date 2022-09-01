import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  let increaseValue = () => {
    // function to increase the value
    setCount((count += 1));
  };

  let decreaseValue = () => {
    // function to decrease the value
    // condition to ensure the count stays a positive number
    if (count === 0) {
      console.log("Let's stay positive");
    } else {
      setCount((count -= 1));
    }
  };
  let resetValue = () => {
    // function to reset the value to 0
    setCount(0); //resets the count to 0
  };

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increaseValue}>+</button>
      <button onClick={decreaseValue}>-</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  );
}
export default Counter;
