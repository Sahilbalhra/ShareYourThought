import { configureStore } from "@reduxjs/toolkit";
// ...
import formReducer from "../features/form/fromSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    from: formReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
