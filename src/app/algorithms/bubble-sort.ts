import { SortingAlgorithm } from "../services/sorting-algorithm";
import { Book } from "../utils/types/bookshelf.types";

export class BubbleSort extends SortingAlgorithm {
  async *sort(books: Book[]) {
    for (let i = 0; i < books.length - 1; i++) {
      for (let j = 0; j < books.length - i - 1; j++) {
        const first = books[j].name;
        const second = books[j + 1].name;

        if (this.isLeftGreaterThanRight(first, second)) {
          await this.swap(books, j, j + 1);
          yield [...books];
        }
      }
    }
  }
}
