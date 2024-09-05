import Image from "next/image";
import diceStyles from "./dice.module.scss";
import dice from "../../../../public/dice.svg";

const Dice: React.FC = () => {
  return (
    <Image
      src={dice}
      alt="shuffle"
      width={20}
      height={20}
      className={diceStyles["dice"]}
    />
  );
};
export default Dice;
