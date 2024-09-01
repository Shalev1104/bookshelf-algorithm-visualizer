export interface Book {
  readonly name: string;
  readonly color: string;
}

export interface BookshelfSorter {
  sort: (books: Book[]) => IterableIterator<Book[]>;
}
