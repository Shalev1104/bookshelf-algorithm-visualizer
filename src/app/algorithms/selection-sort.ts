import { BooksSorter } from "../services/books-sorter";
import { Book } from "../utils/types/bookshelf.types";

export class SelectionSort extends BooksSorter {
  *sort(books: Book[]) {
    for (let i = 0; i < books.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < books.length; j++) {
        if (this.isLeftGreaterThanRight(books[minIndex].name, books[j].name))
          minIndex = j;
      }
      if (i !== minIndex) {
        [books[i], books[minIndex]] = [books[minIndex], books[i]];
        yield [...books];
      }
    }
  }
}
