import gsap from "gsap";
import { makeAutoObservable } from "mobx";

class AnimationStore {
  timeline = gsap.timeline();
  isPaused = this.timeline.paused();
  animationSpeedInMs = 150;
  readonly maxAnimationSpeedInMs = 500;
  readonly minAnimationSpeedInMs = 10;

  constructor() {
    makeAutoObservable(this);
  }

  async animateSwap(index1: number, index2: number) {
    const rightBookIndex = Math.min(index1, index2);
    const leftBookIndex = Math.max(index1, index2);

    const leftBookElement = document.getElementById(`book-${leftBookIndex}`);
    const rightBookElement = document.getElementById(`book-${rightBookIndex}`);

    if (!rightBookElement || !leftBookElement) return;

    this.timeline = gsap.timeline();

    await this.timeline.set([leftBookElement, rightBookElement], {
      y: 0,
      x: 0,
    });

    await this.timeline.to(rightBookElement, {
      y: "-100%",
      duration: this.getAnimationSpeedInSeconds(),
    });

    this.swapStackingContext(leftBookElement, rightBookElement);

    const swapSteps = (leftBookIndex - rightBookIndex) * 100;

    await this.timeline.to([leftBookElement, rightBookElement], {
      x: (i) => `${i === 0 ? "" : "-"}${swapSteps}%`,
      duration: this.getAnimationSpeedInSeconds(),
    });

    await this.timeline.to(rightBookElement, {
      y: 0,
      duration: this.getAnimationSpeedInSeconds(),
    });

    await this.timeline.clear();

    rightBookElement.style.transform = "initial";
    leftBookElement.style.transform = "initial";

    this.swapStackingContext(leftBookElement, rightBookElement);
  }

  private swapStackingContext(element1: HTMLElement, element2: HTMLElement) {
    [element1.style.zIndex, element2.style.zIndex] = [
      element2.style.zIndex,
      element1.style.zIndex,
    ];
  }

  getAnimationSpeedInSeconds() {
    return this.animationSpeedInMs / 1000;
  }

  setAnimationSpeed(ms: number) {
    this.animationSpeedInMs = ms;
  }

  togglePause() {
    if (!this.timeline.paused()) this.timeline.pause();
    else this.timeline.resume();

    this.isPaused = this.timeline.paused();
  }
}

const animationStore = new AnimationStore();
export default animationStore;
