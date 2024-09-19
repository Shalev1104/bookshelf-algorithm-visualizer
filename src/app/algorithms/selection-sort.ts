import { SortingAlgorithm } from "../services/sorting-algorithm";
import { Book } from "../utils/types/bookshelf.types";

export class SelectionSort extends SortingAlgorithm {
  async *sort(books: Book[]) {
    for (let i = 0; i < books.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < books.length; j++) {
        if (this.isLeftGreaterThanRight(books[minIndex].name, books[j].name))
          minIndex = j;
      }
      if (i !== minIndex) {
        await this.swap(books, i, minIndex);
        yield [...books];
      }
    }
  }

  getName(): string {
    return "selection sort";
  }
}
