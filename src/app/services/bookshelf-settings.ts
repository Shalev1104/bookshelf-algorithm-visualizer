import { makeAutoObservable } from "mobx";
import { BubbleSort } from "../algorithms/bubble-sort";
import { BooksSorter } from "./books-sorter";

export class BookshelfSettings {
  sortingAlgorithm: BooksSorter = new BubbleSort();
  manualSteps = false;

  animationSpeedInMs = 200;
  readonly maxAnimationSpeedInMs = 500;
  readonly minAnimationSpeedInMs = 10;

  constructor() {
    makeAutoObservable(this);
  }

  setAnimationSpeed(ms: number) {
    this.animationSpeedInMs = ms;
  }

  setSortingAlgorithm(booksSorter: BooksSorter) {
    this.sortingAlgorithm = booksSorter;
  }
}
