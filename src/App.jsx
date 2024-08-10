import React from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskLists from "./components/TaskLists";
const App = () => {
  return (
    <div className="w-[500px] mx-auto p-5">
      <Heading />
      <CreateTask />
      <TaskLists />
    </div>

    // <Counter />
  );
};

export default App;
