import { configureStore } from "@reduxjs/toolkit";
import stringerReducer from "../features/counter/stringerSlice";

export default configureStore({
  reducer: {
    counter: stringerReducer,
  },
});
