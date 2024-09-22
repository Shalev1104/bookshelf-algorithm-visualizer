import bookshelfStore from "@/app/stores/bookshelf-store";
import controllerStyles from "./controller.module.scss";
import { observer } from "mobx-react";
import DiceIcon from "@/app/common/Dice/Dice";
import Pause from "@/app/common/Pause/Pause";
import Play from "@/app/common/Play/Play";
import animationStore from "@/app/stores/animation-store";
import AbortIcon from "@/app/common/Abort/Abort";

const Controller: React.FC = () => {
  return (
    <div className={controllerStyles["controller"]}>
      <Dice />
      <Task />
      <Abort />
    </div>
  );
};

const Dice = observer(() => {
  return (
    <button
      className={controllerStyles["container"]}
      onClick={() => bookshelfStore.regenerateBooks()}
      disabled={bookshelfStore.isSorting}
    >
      <DiceIcon />
    </button>
  );
});

const Task = observer(() => {
  const { isSorting } = bookshelfStore;
  const { isPaused } = animationStore;

  const TaskToDisplay = !isSorting ? Play : isPaused ? Play : Pause;

  const makeTask = () => {
    if (!bookshelfStore.isSorting) return bookshelfStore.sortBooks();
    return animationStore.togglePause();
  };

  return (
    <button className={controllerStyles["container"]} onClick={makeTask}>
      <TaskToDisplay />
    </button>
  );
});

const Abort = observer(() => {
  const isNotSorting = !bookshelfStore.isSorting;
  const isSortingWithPausedAnimation =
    bookshelfStore.isSorting && animationStore.isPaused;

  const isDisabled = isNotSorting || isSortingWithPausedAnimation;

  return (
    <button
      className={controllerStyles["container"]}
      disabled={isDisabled}
      onClick={() => bookshelfStore.abort()}
    >
      <AbortIcon />
    </button>
  );
});

export default observer(Controller);
