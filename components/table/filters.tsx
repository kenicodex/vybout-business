import { FilterFn, SortingFn, sortingFns } from '@tanstack/react-table';
import { rankItem, compareItems } from '@tanstack/match-sorter-utils';

// Fuzzy search filter
export const fuzzyFilter: FilterFn<unknown> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta?.({ itemRank });
  return itemRank.passed;
};

// Fuzzy sort
export const fuzzySort: SortingFn<unknown> = (rowA, rowB, columnId) => {
  let dir = 0;
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank,
      rowB.columnFiltersMeta[columnId]?.itemRank
    );
  }
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
