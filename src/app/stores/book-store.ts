import { makeAutoObservable } from "mobx";
import { BooksGenerator } from "../services/books-generator";
import { Book } from "../utils/types/bookshelf.types";
import { BubbleSort } from "../algorithms/bubble-sort";
import { BooksSorter } from "../services/books-sorter";

class BookStore {
  books: Book[] = [];
  sortingAlgorithm: BooksSorter | undefined;

  constructor() {
    makeAutoObservable(this);
    this.regenerateBooks();
    this.sortingAlgorithm = new BubbleSort();
  }

  sortBooks() {
    if (!this.sortingAlgorithm) return;

    const generator = this.sortingAlgorithm.sort([...this.books]);
    const intervalId = setInterval(() => {
      const result = generator.next();

      if (result.done) clearInterval(intervalId);
      else this.books = result.value;
    }, 100);
  }

  regenerateBooks() {
    const booksGenerator = new BooksGenerator();
    this.books = booksGenerator.generate();
  }
}

const bookStore = new BookStore();
export default bookStore;
