import React, { useState } from "react";


import './ItemCounter.scss'


export const ItemCounter= () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
    
        <button onClick={handleDecrement} class="quantity__minus" type="button">-</button>
        <span>{count}</span>
        <button onClick={handleIncrement} class="quantity__plus" type="button">+</button>

    </div>
  );
}

