import React from "react";
import Shelf from "../Shelf/Shelf";
import BookList from "../BookList/BookList";
import { BooksGenerator } from "@/app/services/books-generator";

const Bookshelf: React.FC = () => {
  const initialBooks = new BooksGenerator().generate();

  return (
    <section
      style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
    >
      <BookList initialBooks={initialBooks} />
      <Shelf />
    </section>
  );
};

export default Bookshelf;
