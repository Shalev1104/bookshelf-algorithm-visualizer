import { SortingAlgorithm } from "../services/sorting-algorithm";
import { Book } from "../utils/types/bookshelf.types";

export class InsertionSort extends SortingAlgorithm {
  async *sort(books: Book[]) {
    for (let i = 1; i < books.length; i++) {
      for (let j = i; j > 0; j--) {
        const first = books[j - 1].name;
        const second = books[j].name;

        if (this.isLeftGreaterThanRight(first, second)) {
          await this.swap(books, j - 1, j);
          yield [...books];
        } else break;
      }
    }
  }

  getName(): string {
    return "insertion sort";
  }
}
