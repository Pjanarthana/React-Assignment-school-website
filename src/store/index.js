import { configureStore } from '@reduxjs/toolkit';
import admissionReducer from './slices/admissionSlice';

const store = configureStore({
  reducer: {
    admission: admissionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;