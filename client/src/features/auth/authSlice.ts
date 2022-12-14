import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

interface AuthUser {
  token: string | null;
}

// Define the initial state using that type
const initialState: AuthUser = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logedInUser: (state, action: any) => {
      if (action.payload.token) {
        console.log("Token in slice: " + action.payload.token);
        // localStorage.setItem("token", action.payload.token);
        state.token = localStorage.getItem("token");
      }
    },
    logOutUser: () => {
      localStorage.clear();
    },
  },
});

export const { logedInUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
