import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null, // Initial state is null (no user)
  reducers: {
    setUser: (state, action) => {
      return action.payload; // Set the user to the payload (e.g., username)
    },
    clearUser: (state) => {
      return null; // Clear the user (e.g., log out)
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
