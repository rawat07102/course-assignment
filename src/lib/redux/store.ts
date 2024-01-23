import { configureStore } from "@reduxjs/toolkit";
import { courseListingsReducer } from "@/features/courseListings/courseListings.slice";
import { apiSlice } from "@/features/api/api.slice";

export default configureStore({
  reducer: {
    courseListingsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
