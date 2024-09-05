import bookshelfStore from "@/app/stores/bookshelf-store";
import controllerStyles from "./controller.module.scss";
import { observer } from "mobx-react";
import Dice from "@/app/common/Dice/Dice";
import Pause from "@/app/common/Pause/Pause";
import Play from "@/app/common/Play/Play";

const Controller: React.FC = () => {
  const makeTask = () => {
    if (!bookshelfStore.isSorting) return bookshelfStore.sortBooks();
    return bookshelfStore.togglePause();
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
  const { isSorting, isPaused } = bookshelfStore;
  if (!isSorting) return <Play />;
  return isPaused ? <Play /> : <Pause />;
});

export default observer(Controller);
