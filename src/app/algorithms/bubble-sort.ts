import { BooksSorter } from "../services/books-sorter";
import { Book } from "../utils/types/bookshelf.types";

export class BubbleSort extends BooksSorter {
  *sort(books: Book[]) {
    for (let i = 0; i < books.length - 1; i++) {
      for (let j = 0; j < books.length - i - 1; j++) {
        const first = books[j].name;
        const second = books[j + 1].name;

        if (this.isLeftGreaterThanRight(second, first)) {
          [books[j], books[j + 1]] = [books[j + 1], books[j]];
          yield [...books];
        }
      }
    }
  }
}
