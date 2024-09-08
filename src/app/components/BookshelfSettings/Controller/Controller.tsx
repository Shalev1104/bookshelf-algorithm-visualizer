import bookshelfStore from "@/app/stores/bookshelf-store";
import controllerStyles from "./controller.module.scss";
import { observer } from "mobx-react";
import Dice from "@/app/common/Dice/Dice";
import Pause from "@/app/common/Pause/Pause";
import Play from "@/app/common/Play/Play";
import animationStore from "@/app/stores/animation-store";

const Controller: React.FC = () => {
  const makeTask = () => {
    if (!bookshelfStore.isSorting) return bookshelfStore.sortBooks();
    return animationStore.togglePause();
  };

  return (
    <div className={controllerStyles["controller"]}>
      <button
        className={controllerStyles["container"]}
        onClick={() => bookshelfStore.regenerateBooks()}
        disabled={bookshelfStore.isSorting}
      >
        <Dice />
      </button>

      <button className={controllerStyles["container"]} onClick={makeTask}>
        <TaskIcon />
      </button>
    </div>
  );
};

const TaskIcon = observer(() => {
  const { isSorting } = bookshelfStore;
  const { isPaused } = animationStore;

  if (!isSorting) return <Play />;
  return isPaused ? <Play /> : <Pause />;
});

export default observer(Controller);
