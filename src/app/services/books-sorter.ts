import { Book } from "../utils/types/bookshelf.types";

export abstract class BooksSorter {
  abstract sort(books: Book[]): IterableIterator<Book[]>;

  isLeftGreaterThanRight(leftBook: string, rightBook: string) {
    return leftBook.localeCompare(rightBook, "he") > 0;
  }
}
