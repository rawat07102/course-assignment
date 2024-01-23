import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CourseListingInitialState {
  courses: string[];
}

const initialState: CourseListingInitialState = {
  courses: [],
};

export const courseListingsSlic = createSlice({
  name: "courseListings",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<string>) => {
      state.courses.push(action.payload);
    },
  },
});

export const {
  actions: { addCourse },
  reducer: courseListingsReducer,
} = courseListingsSlic;
