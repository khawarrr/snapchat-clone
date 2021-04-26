import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    value: 0,
  },
  reducers: {
    // set the cameraImage to action.
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    // set the camera Image to null(reset)
    resetCameraImage: (state) => {
      state.cameraImage = null;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCameraImage = (state) => state.camera.cameraImage;
// selector helps in pulling the info out of the store.

export default cameraSlice.reducer;
