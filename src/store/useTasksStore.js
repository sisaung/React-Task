import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, description: "Buy groceries", isDone: true },
    { id: 2, description: "Finish project report", isDone: false },
    { id: 3, description: "Schedule dentist appointment", isDone: false },
    { id: 4, description: "Exercise", isDone: true },
  ],
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((tasks) => tasks.id !== id) })),

  toggleTasks: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      ),
    })),
  addTasks: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
}));

export default useTaskStore;
