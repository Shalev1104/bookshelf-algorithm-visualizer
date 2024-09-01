"use client";
import React from "react";
import bookListStyles from "./book-list.module.scss";
import Book from "../Book/Book";
import { observer } from "mobx-react";
import bookStore from "@/app/stores/book-store";

const BookList: React.FC = () => {
  return (
    <ul
      className={bookListStyles["books"]}
      onClick={() => bookStore.sortBooks()}
    >
      {bookStore.books.map((book, i) => (
        <Book {...book} key={i} />
      ))}
    </ul>
  );
};

export default observer(BookList);
