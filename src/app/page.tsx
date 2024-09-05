import Bookshelf from "./components/Bookshelf/Bookshelf";
import BookshelfSettings from "./components/BookshelfSettings/BookshelfSettings";
import pageStyles from "./page.module.scss";

export default function BookshelfMainPage() {
  return (
    <main className={pageStyles["main"]}>
      <BookshelfSettings />
      <Bookshelf />
    </main>
  );
}
