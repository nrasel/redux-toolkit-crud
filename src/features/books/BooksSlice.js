import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Naimur" },
    { id: 2, title: "Bangladesh", author: "Naimur" },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
