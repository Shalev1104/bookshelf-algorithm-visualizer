import bookshelfStore from "@/app/stores/bookshelf-store";
import algorithmSelectionStyles from "./algorithm-selection.module.scss";
import { observer } from "mobx-react";
import { BubbleSort } from "@/app/algorithms/bubble-sort";
import classnames from "classnames";
import { InsertionSort } from "@/app/algorithms/insertion-sort";
import { SelectionSort } from "@/app/algorithms/selection-sort";
import { SortingAlgorithm } from "@/app/services/sorting-algorithm";

const AlgorithmSelection: React.FC = () => {
  const algorithms = [BubbleSort, InsertionSort, SelectionSort];

  return (
    <div className={algorithmSelectionStyles["algorithm-selection"]}>
      {algorithms.map((algorithmClass, index) => (
        <Algorithm algorithm={algorithmClass} key={index} />
      ))}
    </div>
  );
};

type Props = {
  algorithm: new () => SortingAlgorithm;
};
const Algorithm: React.FC<Props> = observer(({ algorithm }) => {
  const instance = new algorithm();

  const isActive = () => bookshelfStore.sortingAlgorithm instanceof algorithm;

  const onSelect = () => bookshelfStore.setSortingAlgorithm(instance);

  return (
    <button
      className={classnames(
        algorithmSelectionStyles["btn-sort"],
        isActive() ? algorithmSelectionStyles["btn-sort-active"] : null
      )}
      onClick={() => onSelect()}
      disabled={bookshelfStore.isSorting}
    >
      {instance.getName()}
    </button>
  );
});

export default AlgorithmSelection;
