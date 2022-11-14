import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface FormData {
  title: string;
  description: string;
  tags: string[];
  picUrl: string;
  id: string;
}
interface FormState {
  updateForm: boolean;
  formData: FormData;
  signInForm: boolean;
}

// Define the initial state using that type
const initialState: FormState = {
  updateForm: false,
  formData: {
    id: "",
    title: "",
    description: "",
    tags: [""],
    picUrl: "",
  },
  signInForm: true,
};

export const formSlice = createSlice({
  name: "form",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateForm: (state) => {
      state.updateForm = true;
    },
    formData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
    selectSignInForm: (state) => {
      state.signInForm = !state.signInForm;
    },
  },
});

export const { updateForm, formData,selectSignInForm } = formSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFrom = (state: RootState) => state.from.updateForm;

export default formSlice.reducer;
