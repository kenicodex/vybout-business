'use client';
import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  ColumnFiltersState,
  FilterFnOption,
} from '@tanstack/react-table';
import { fuzzyFilter } from './filters';
import { DebouncedInput } from './DebouncedInput';
import type { DataTableProps } from './types';
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from 'next/navigation';



export function DataTable<TData>({
  data,
  columns,
  pageSize = 10,
  searchable = true,
  globalFilterFn = 'fuzzy',
  showNumber = false,
  onClickView,
  onViewRoute,
}: DataTableProps<TData>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const pathname = usePathname();

  const table = useReactTable({
    data,
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { columnFilters, globalFilter },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: globalFilterFn as FilterFnOption<TData>,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } },
  });

  return (
    <div className="p-4 space-y-3 w-full">
      {searchable && (
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(String(value))}
          placeholder="Search..."
          className="w-full border shadow-sm"
        />
      )}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {showNumber && (
                  <th className="px-4 py-2 text-left font-medium">S/N</th>
                )}
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-2 text-left font-medium">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
                <th className="px-4 py-2 text-left font-medium">Action</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, idx) => {
                const rowId = (row.original as any)?.id;
;
               
                return (
                  <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                    {showNumber && (
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{idx + 1}</td>
                    )}
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-4 whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                    <td className="px-4 py-4 whitespace-nowrap">
                      {onClickView ? (
                        <Button size="sm" variant="outline" onClick={() => onClickView(row.original)}>View</Button>
                      ) : rowId ? (
                        <Link href={onViewRoute?.(row.original) || `${pathname}/${rowId}`} passHref legacyBehavior>
                          <Button size="sm" variant="outline">View</Button>
                        </Link>
                      ) : (
                        <Button size="sm" variant="outline" disabled>View</Button>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length + (showNumber ? 2 : 1)} className="text-center py-4 text-gray-400">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="space-x-1">
          <Button size="sm" variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Prev
          </Button>
          <Button size="sm" variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
        <span className="text-sm">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
      </div>
    </div>
  );
}
