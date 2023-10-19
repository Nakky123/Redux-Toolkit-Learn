import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/UserData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: Data },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, username } = action.payload;
      const userIndex = state.value.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.value[userIndex].name = name;
        state.value[userIndex].username = username;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
