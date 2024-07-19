import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { ColumnVisibility } from "./ColumnVisibility";
import TableEmpty from "./TableEmpty";
import TableFilters from "./TableFilters";
import { objectToQuery } from "@/lib/query-utils";
import { onColumnFilterChange, onSortingChange } from "@/lib/table-utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onQueryChange?: ({}: any) => void;
  query?: any;
  searchKey?: string;
  searchPlaceholder?: string;
  totalRecords: number;
  filters?: any[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
  onQueryChange,
  query = {},
  searchKey = "search",
  searchPlaceholder = "Type to search...",
  totalRecords,
  filters,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: (filter) => {
      onColumnFilterChange({
        filter,
        onQueryChange,
        setColumnFilters,
        columnFilters,
      });
    },
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: (sort) => {
      onSortingChange({ sort, onQueryChange, setSorting, sorting });
    },
    rowCount: totalRecords,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    debugTable: true,
    // filterFns:
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: query.pageNumber - 1,
        pageSize: query.pageSize,
      },
    },
  });

  return (
    <div>
      <div className="flex items-center py-4 gap-3">
        <Input
          type="search"
          placeholder={searchPlaceholder}
          value={query[searchKey] ?? ""}
          onChange={(event) =>
            onQueryChange && onQueryChange({ [searchKey]: event.target.value })
          }
          className="max-w-xs h-8"
          size={3}
        />
        <TableFilters
          query={query}
          onQueryChange={onQueryChange}
          table={table}
          filters={filters}
        />
        <ColumnVisibility table={table} />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="py-1" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableEmpty columnsLength={columns.length} />
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination table={table} onQueryChange={onQueryChange} />
    </div>
  );
};

export default DataTable;
