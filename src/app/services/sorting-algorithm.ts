import { Book } from "../utils/types/bookshelf.types";
import animationStore from "../stores/animation-store";

export abstract class SortingAlgorithm {
  abstract sort(books: Book[]): AsyncGenerator<Book[]>;

  isLeftGreaterThanRight(leftBook: string, rightBook: string) {
    return leftBook.localeCompare(rightBook, "he") > 0;
  }

  async swap(books: Book[], index1: number, index2: number) {
    await animationStore.animateSwap(index1, index2);
    [books[index1], books[index2]] = [books[index2], books[index1]];
  }
}
