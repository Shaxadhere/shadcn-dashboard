import DataTable from "@/components/globals/table/DataTable";
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import ColumnHeader from "@/components/globals/table/ColumnHeader";
import { paymentTableData } from "@/constants/dummyData";
import { Payment } from "@/models/Payment";

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <ColumnHeader column={column} title="Status" />,
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHeader column={column} title="Email" />,
    enableSorting: true,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <ColumnHeader column={column} title="Amount" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: ({ column }) => <ColumnHeader column={column} title="Action" />,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

async function getData(): Promise<Payment[]> {
  return paymentTableData;
}

const TableComponents = () => {
  const [data, setData] = useState<Payment[]>([]);
  const [query, setQuery] = useState({});

  const onQueryChange = (updatedQuery: any) => {
    setQuery((prev) => ({
      ...prev,
      ...updatedQuery,
    }));
  };

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div className="w-[100%] py-10">
      <DataTable
        columns={columns}
        data={data}
        totalRecords={200}
        onQueryChange={onQueryChange}
        query={query}
      />
      <p>{JSON.stringify(query, undefined, 2)}</p>
    </div>
  );
};

export default TableComponents;
