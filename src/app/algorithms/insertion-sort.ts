import { BooksSorter } from "../services/books-sorter";
import { Book } from "../utils/types/bookshelf.types";

export class InsertionSort extends BooksSorter {
  *sort(books: Book[]) {
    for (let i = 1; i < books.length; i++) {
      for (let j = i; j > 0; j--) {
        const first = books[j - 1].name;
        const second = books[j].name;

        if (this.isLeftGreaterThanRight(first, second)) {
          [books[j - 1], books[j]] = [books[j], books[j - 1]];
          yield [...books];
        } else break;
      }
    }
  }
}
