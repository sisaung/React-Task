import React from "react";
import useCounterStore from "../store/useCounterStore";

const Counter = () => {
  const { count, reset, increment, decrement } = useCounterStore();
  console.log(useCounterStore());

  const handleIncrease = () => {
    increment();
  };

  const handleDecrement = () => {
    if (count > 0) return decrement();
  };
  const handleReset = () => {
    reset();
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-300">
      <div>
        <p className="mb-5 text-2xl font-bold text-blue-400">Count : {count}</p>
        <div className="flex items-center gap-5 mb-3">
          <button
            onClick={handleIncrease}
            className="px-4 py-2 text-white bg-blue-500"
          >
            increase
          </button>
          <button
            onClick={handleDecrement}
            className="px-4 py-2 text-white bg-lime-500"
          >
            decrease
          </button>
        </div>
        <button
          onClick={handleReset}
          className="px-4 py-2 text-white bg-red-500"
        >
          resest
        </button>
      </div>
    </div>
  );
};

export default Counter;
