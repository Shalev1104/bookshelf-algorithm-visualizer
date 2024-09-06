import bookshelfStore from "@/app/stores/bookshelf-store";
import algorithmSelectionStyles from "./algorithm-selection.module.scss";
import { observer } from "mobx-react";
import { BubbleSort } from "@/app/algorithms/bubble-sort";
import { BooksSorter } from "@/app/services/books-sorter";
import classnames from "classnames";
import { InsertionSort } from "@/app/algorithms/insertion-sort";
import { SelectionSort } from "@/app/algorithms/selection-sort";

const AlgorithmSelection: React.FC = () => {
  const algorithms = [BubbleSort, InsertionSort, SelectionSort];

  return (
    <div className={algorithmSelectionStyles["algorithm-selection"]}>
      {algorithms.map((algorithm, index) => (
        <Algorithm algorithm={algorithm} key={index} />
      ))}
    </div>
  );
};

type Props = {
  algorithm: new () => BooksSorter;
};
const Algorithm: React.FC<Props> = observer(({ algorithm }) => {
  const isActive = () =>
    bookshelfStore.settings.sortingAlgorithm instanceof algorithm;

  const onSelect = () =>
    bookshelfStore.settings.setSortingAlgorithm(new algorithm());

  return (
    <button
      className={classnames(
        algorithmSelectionStyles["btn-sort"],
        isActive() ? algorithmSelectionStyles["btn-sort-active"] : null
      )}
      onClick={() => onSelect()}
      disabled={bookshelfStore.isSorting}
    >
      {algorithm.name}
    </button>
  );
});

export default AlgorithmSelection;
