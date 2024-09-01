import React from "react";
import bookStyles from "./book.module.scss";
import { Book as BookProps } from "@/app/utils/types/bookshelf.types";

const Book: React.FC<BookProps> = ({ name, color: backgroundColor }) => {
  return (
    <li className={bookStyles["book-item"]}>
      <div className={bookStyles["book"]}>
        <div className={bookStyles["cover"]} style={{ backgroundColor }} />
        <div className={bookStyles["spine"]} style={{ backgroundColor }}>
          <h5 className={bookStyles["name"]}>{name}</h5>
        </div>
      </div>
    </li>
  );
};

export default Book;
