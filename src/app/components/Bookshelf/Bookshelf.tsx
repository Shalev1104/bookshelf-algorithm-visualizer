import React from "react";
import bookshelfStyles from "./bookshelf.module.scss";
import Book from "../Book/Book";

const Bookshelf: React.FC = () => {
  const books = getAllHebrewCharacters();

  return (
    <div className={bookshelfStyles["bookshelf"]}>
      <ul className={bookshelfStyles["books"]}>
        {books.map((bookName, i) => (
          <Book name={bookName} backgroundColor={getRandomColor()} key={i} />
        ))}
      </ul>
    </div>
  );
};

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturationPercentage = 50;
  const lightnessPercentage = 50;

  return `hsl(${hue}, ${saturationPercentage}%, ${lightnessPercentage}%)`;
}
function getAllHebrewCharacters() {
  return [
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א",
  ];
}

export default Bookshelf;
