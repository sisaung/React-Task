import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 3,

  reset: () => set({ count: 0 }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
