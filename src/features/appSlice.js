import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    selectedImg: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    selectImg: (state, action) => {
      state.selectedImg = action.payload
    },
    resetImg: (state) => {
      state.selectedImg = null
    }
  },
});

export const { login, logout, selectImg, resetImg } = appSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = state => state.app.user;

export const selectSelectedImg = (state) => state.app.selectedImg;

export default appSlice.reducer;
