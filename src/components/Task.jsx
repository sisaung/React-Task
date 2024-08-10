import React from "react";
import useTasksStore from "../store/useTasksStore";

const Task = ({ task: { id, description, isDone } }) => {
  const { removeTask, toggleTasks } = useTasksStore();

  const handleDelete = () => {
    if (confirm("Are you sure want to delete?")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    toggleTasks(id);
  };

  return (
    <div className="flex items-center justify-between p-4 mb-3 border border-l-2 border-gray-300 border-l-cyan-500 rounded-l-md last:mb-0">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="cursor-pointer"
          onChange={handleOnChange}
          checked={isDone}
        />

        <p className={`${isDone && "line-through text-gray-400"}`}>
          {description}
        </p>
      </div>
      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 stroke-red-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default Task;
