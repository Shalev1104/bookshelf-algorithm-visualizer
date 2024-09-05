"use client";
import React, { useEffect } from "react";
import bookListStyles from "./book-list.module.scss";
import Book from "../Book/Book";
import { observer } from "mobx-react";
import bookshelfStore from "@/app/stores/bookshelf-store";
import { Book as BookProps } from "@/app/utils/types/bookshelf.types";

type Props = {
  initialBooks: BookProps[];
};
const BookList: React.FC<Props> = ({ initialBooks }) => {
  useEffect(() => bookshelfStore.setBooks(initialBooks), [initialBooks]);

  return (
    <ul className={bookListStyles["books"]}>
      {getBooks(bookshelfStore.books, initialBooks).map((book, i) => (
        <Book {...book} key={i} />
      ))}
    </ul>
  );
};

function getBooks(booksStore: BookProps[], initialBooks: BookProps[]) {
  if (booksStore.length > 0) return booksStore; // Client Rendering
  return initialBooks; // Server Rendering
}

export default observer(BookList);
