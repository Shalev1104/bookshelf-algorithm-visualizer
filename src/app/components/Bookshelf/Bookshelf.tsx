import React from "react";
import bookshelfStyles from "./bookshelf.module.scss";
import Shelf from "../Shelf/Shelf";
import dynamic from "next/dynamic";
const BookList = dynamic(() => import("../BookList/BookList"), { ssr: false });

const Bookshelf: React.FC = () => {
  return (
    <div className={bookshelfStyles["bookshelf"]}>
      <BookList />
      <Shelf />
    </div>
  );
};

export default Bookshelf;
