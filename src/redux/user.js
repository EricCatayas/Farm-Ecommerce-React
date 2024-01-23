import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: 0 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  },
});

// export your actons so they can be called by other components
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;


