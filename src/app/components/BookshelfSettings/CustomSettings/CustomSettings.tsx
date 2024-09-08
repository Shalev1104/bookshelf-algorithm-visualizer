import { observer } from "mobx-react";
import customSettingsStyles from "./custom-settings.module.scss";
import bookshelfStore from "@/app/stores/bookshelf-store";
import Slider from "@/app/common/Slider/Slider";
import animationStore from "@/app/stores/animation-store";

function CustomSettings() {
  return (
    <div className={customSettingsStyles["custom-settings"]}>
      <Slider
        min={animationStore.minAnimationSpeedInMs}
        max={animationStore.maxAnimationSpeedInMs}
        value={animationStore.animationSpeedInMs}
        step={10}
        onChange={(e) => animationStore.setAnimationSpeed(+e.target.value)}
        disabled={bookshelfStore.isSorting}
      />
      <span className={customSettingsStyles["speed-text"]}>
        Speed: {animationStore.animationSpeedInMs}ms
      </span>
    </div>
  );
}

export default observer(CustomSettings);
