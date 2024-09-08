import React from "react";
import bookStyles from "./book.module.scss";
import { Book as BookProps } from "@/app/utils/types/bookshelf.types";

type Props = BookProps & {
  order: number;
  index: number;
};
const Book: React.FC<Props> = ({
  name,
  color: backgroundColor,
  order,
  index,
}) => {
  return (
    <li
      className={bookStyles["book-item"]}
      style={{ zIndex: order }}
      id={`book-${index}`}
    >
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
