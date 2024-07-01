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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onQueryChange?: ({}: any) => void;
  query?: Object;
  searchKey?: string;
  searchPlaceholder?: string;
  totalRecords: number;
}

const DataTable = <TData, TValue>({
  columns,
  data,
  onQueryChange,
  query = {},
  searchKey = "search",
  searchPlaceholder = "Type to search...",
  totalRecords,
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
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: (sort) => {
      const newSortVal = sort(sorting);
      setSorting(sort);
      onQueryChange && onQueryChange({ sort: newSortVal });
    },
    rowCount: totalRecords,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    debugTable: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder={searchPlaceholder}
          value={query[searchKey] ?? ""}
          onChange={(event) =>
            onQueryChange && onQueryChange({ [searchKey]: event.target.value })
          }
          className="max-w-sm"
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
                    <TableCell key={cell.id}>
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

      <Pagination table={table} onQueryChange={onQueryChange} query={query} />
    </div>
  );
};

export default DataTable;
