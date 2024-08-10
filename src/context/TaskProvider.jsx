import React, { useState } from "react";
import TaskContext from "./task-context";

const TaskProvider = ({ children }) => {
  const todoTasks = [
    { id: 1, description: "Buy groceries", isDone: true },
    { id: 2, description: "Finish project report", isDone: false },
    { id: 3, description: "Schedule dentist appointment", isDone: false },
    { id: 4, description: "Exercise", isDone: true },
  ];

  const [tasks, setTasks] = useState(todoTasks);

  const addTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTasks, doneTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
