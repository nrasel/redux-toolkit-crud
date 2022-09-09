import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/BooksSlice";

const store = configureStore({
  reducer: {
    booksReducer: bookReducer,
  },
});

export default store;
