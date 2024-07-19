import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
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
import useDebouce from "@/hooks/useDebouce";
import useBoolean from "@/hooks/useBoolean";

type CrudListProps = {
  formState: ReturnType<typeof useBoolean>;
};

export const useCrudList = <T,>({ formState }: CrudListProps) => {
  const [data, setData] = useState<T[]>([]);
  const [query, setQuery] = useState({});
  const deboucedQuery = useDebouce(query);

  async function getData(): Promise<T[]> {
    return paymentTableData as T[];
  }

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const onQueryChange = (newQuery: any) => {
    setQuery((prev) => ({ ...prev, ...newQuery }));
  };

  const columns: ColumnDef<T>[] = [
    {
      accessorKey: "status",
      header: ({ column }) => <ColumnHeader column={column} title="Status" />,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "email",
      header: ({ column }) => <ColumnHeader column={column} title="Email" />,
      enableSorting: true,
    },
    {
      id: "actions",
      header: ({ column }) => <ColumnHeader column={column} title="Action" />,
      cell: ({ row }) => {
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
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return {
    columns,
    data,
    query,
    onQueryChange,
  };
};
