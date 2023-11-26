import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    mode: 'all',
    amount: 5,
  },
  reducers: {
    createTask(state, action) {
      //приходять данні і на основі них створюємо нову таску
      const { body, deadLine } = action.payload; // values = {body:'nnn', deadLine: date}
      const newTask = {
        id: uuidv4(),
        isDone: false,
        body: body,
        deadLine: deadLine,
      };
      //нову таску додати в стейт
      state.tasks.push(newTask);
    },
    deleteTask(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => id !== task.id);
    },
    setDoneTask(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.map((task) =>
        id === task.id ? { ...task, isDone: !task.isDone } : task
      );
    },
    setMode(state, action) {
      const { mode } = action.payload;
      state.mode = mode;
    },
    setAmount(state, action) {
      const { amount } = action.payload;
      state.amount = amount;
    },
  },
});
export const { createTask, deleteTask, setDoneTask, setMode, setAmount } =
  todoSlice.actions;
export default todoSlice.reducer;
