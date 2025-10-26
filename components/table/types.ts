import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingFn,
  Table as ReactTableType,
} from '@tanstack/react-table';
import { RankingInfo } from '@tanstack/match-sorter-utils';

// Extend TanStack's types for fuzzy filtering
declare module '@tanstack/react-table' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export type DataTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, unknown>[];
  pageSize?: number;
  searchable?: boolean;
  globalFilterFn?: string | FilterFn<TData>;
  showNumber?: boolean;
  onClickView?: (rowData: TData) => void;
  onViewRoute?: (rowData: TData) => string;
};
