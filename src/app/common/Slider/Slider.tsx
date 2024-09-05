import { InputHTMLAttributes } from "react";
import sliderStyles from "./slider.module.scss";

type SliderProps = InputHTMLAttributes<HTMLInputElement>;

const Slider: React.FC<SliderProps> = (inputProps) => {
  return (
    <input type="range" className={sliderStyles["slider"]} {...inputProps} />
  );
};

export default Slider;
