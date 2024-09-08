import { makeAutoObservable } from "mobx";
import { BooksGenerator } from "../services/books-generator";
import { Book } from "../utils/types/bookshelf.types";
import { SortingAlgorithm } from "../services/sorting-algorithm";
import { BubbleSort } from "../algorithms/bubble-sort";

class BookshelfStore {
  books: Book[] = [];
  isSorting = false;
  sortingAlgorithm: SortingAlgorithm = new BubbleSort();

  constructor() {
    makeAutoObservable(this);
  }

  async sortBooks() {
    this.setIsSorting(true);
    const generator = this.sortingAlgorithm.sort([...this.books]);

    let nextResult;
    while (!(nextResult = await generator.next()).done) {
      this.setBooks(nextResult.value);
    }
    this.setIsSorting(false);
  }

  regenerateBooks() {
    const booksGenerator = new BooksGenerator();
    this.setBooks(booksGenerator.generate());
  }

  setBooks(books: Book[]) {
    this.books = [...books];
  }

  setSortingAlgorithm(sortingAlgorithm: SortingAlgorithm) {
    this.sortingAlgorithm = sortingAlgorithm;
  }

  private setIsSorting(isSorting: boolean) {
    this.isSorting = isSorting;
  }
}

const bookshelfStore = new BookshelfStore();
export default bookshelfStore;
