import { observer } from "mobx-react";
import customSettingsStyles from "./custom-settings.module.scss";
import bookshelfStore from "@/app/stores/bookshelf-store";
import Slider from "@/app/common/Slider/Slider";

function CustomSettings() {
  return (
    <div className={customSettingsStyles["custom-settings"]}>
      <Slider
        min={bookshelfStore.settings.minAnimationSpeedInMs}
        max={bookshelfStore.settings.maxAnimationSpeedInMs}
        value={bookshelfStore.settings.animationSpeedInMs}
        step={10}
        onChange={(e) =>
          bookshelfStore.settings.setAnimationSpeed(+e.target.value)
        }
        disabled={bookshelfStore.isSorting}
      />
      <span className={customSettingsStyles["speed-text"]}>
        Speed: {bookshelfStore.settings.animationSpeedInMs}ms
      </span>
    </div>
  );
}

export default observer(CustomSettings);
