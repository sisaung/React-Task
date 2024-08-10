import React, { useState } from "react";
import useTaskStore from "../store/useTasksStore";

const CreateTask = () => {
  const [input, setInput] = useState("");
  const { addTasks } = useTaskStore();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddTasksBtn = () => {
    const newTasks = {
      id: Date.now(),
      description: input,
      isDone: false,
    };
    if (input !== "") {
      addTasks(newTasks);
      setInput("");
    }
  };

  return (
    <div className="flex mb-5">
      <input
        type="text"
        value={input}
        onChange={handleInput}
        className="flex-grow px-5 py-2 border border-gray-300 caret-cyan-400 focus:outline-none"
        placeholder="Enter new task..."
      />
      <button
        onClick={handleAddTasksBtn}
        className="px-3 py-3 text-white bg-cyan-400 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default CreateTask;
