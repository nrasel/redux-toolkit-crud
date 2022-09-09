import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";

const BooksVies = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, idx) => {
              const { id, title, author } = book;
              console.log(id);
              return (
                <tr key={idx}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link state={{ id, title, author }} to="/edit-book">
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksVies;
