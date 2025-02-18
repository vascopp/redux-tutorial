import { createSlice } from "@reduxjs/toolkit";

export const stringerSlice = createSlice({
  name: "stringer",
  initialState: {
    value: "A",
  },
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += "A";
    },
    remove: (state) => {
      state.value = state.value.slice(0, -1);
    },
    addString: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, addString } = stringerSlice.actions;

// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const addAsync = (string) => (dispatch) => {
  setTimeout(() => {
    dispatch(addString(string));
  }, 1000);
};

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export default stringerSlice.reducer;
