import React from "react";
import Task from "../components/Task";
import useTasksStore from "../store/useTasksStore";

const TaskLists = () => {
  const { tasks } = useTasksStore();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="mb-3 font-serif text-lg font-bold text-gray-600">
          All Tasks (Total {tasks.length} )
        </h2>
        <h2 className="mb-3 font-serif text-lg font-bold text-gray-600">
          ( Done {tasks.filter((t) => t.isDone).length} )
        </h2>
      </div>

      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
