import { Book } from "../utils/types/bookshelf.types";

export class BooksGenerator {
  constructor() {}

  generate(): Book[] {
    const scrambledHebrewCharacters = this.getAllHebrewCharacters().sort(
      () => Math.random() - 0.5
    );
    return scrambledHebrewCharacters.map((character) => ({
      name: character,
      color: this.getRandomColor(),
    }));
  }

  private getAllHebrewCharacters() {
    return [
      "א",
      "ב",
      "ג",
      "ד",
      "ה",
      "ו",
      "ז",
      "ח",
      "ט",
      "י",
      "כ",
      "ל",
      "מ",
      "נ",
      "ס",
      "ע",
      "פ",
      "צ",
      "ק",
      "ר",
      "ש",
      "ת",
    ];
  }

  private getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturationPercentage = 50;
    const lightnessPercentage = 50;

    return `hsl(${hue}, ${saturationPercentage}%, ${lightnessPercentage}%)`;
  }
}
