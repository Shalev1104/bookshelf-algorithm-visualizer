import { makeAutoObservable } from "mobx";
import { BooksGenerator } from "../services/books-generator";
import { Book } from "../utils/types/bookshelf.types";
import { BookshelfSettings } from "../services/bookshelf-settings";

class BookshelfStore {
  books: Book[] = [];
  isSorting = false;
  isPaused = false;
  settings: BookshelfSettings = new BookshelfSettings();
  private intervalId: NodeJS.Timeout | undefined;
  private generator: IterableIterator<Book[]> = {} as IterableIterator<Book[]>;

  constructor() {
    makeAutoObservable(this);
  }

  sortBooks() {
    this.isSorting = true;
    this.generator = this.settings.sortingAlgorithm.sort([...this.books]);
    this.resumeSort();
  }

  private resumeSort() {
    this.intervalId = setInterval(() => {
      if (this.isPaused) this.onPauseSort();

      const result = this.generator.next();

      if (result.done) this.onCompleteSort();
      else this.setBooks(result.value);
    }, this.settings.animationSpeedInMs);
  }

  regenerateBooks() {
    const booksGenerator = new BooksGenerator();
    this.books = booksGenerator.generate();
  }

  setBooks(books: Book[]) {
    this.books = [...books];
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused) this.resumeSort();
  }

  private onCompleteSort() {
    clearInterval(this.intervalId);
    this.isSorting = false;
  }

  private onPauseSort() {
    clearInterval(this.intervalId);
  }
}

const bookshelfStore = new BookshelfStore();
export default bookshelfStore;
