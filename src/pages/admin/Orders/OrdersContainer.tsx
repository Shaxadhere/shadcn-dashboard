import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import ColumnHeader from "@/components/globals/table/ColumnHeader";
import { paymentTableData } from "@/constants/dummyData";
import useDebouce from "@/hooks/useDebouce";
import { Order } from "@/models";
import useBoolean from "@/hooks/useBoolean";
import { z } from "zod";
import { ordersFormSchema } from "@/schemas/order-form-schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CommonDropdown from "@/components/globals/drop-menus/CommonDropdown";
import { toast } from "sonner";

export const useOrdersRoot = () => {
  const formState = useBoolean(false);
  const deleteModalState = useBoolean(false);
  const [selected, setSelected] = useState(null);

  const onClose = () => {
    setSelected(null);
  };

  const onCreate = () => {
    formState.setTrue();
  };

  const onEdit = (row: any) => {
    setSelected(row);
    formState.setTrue();
  };

  const onDelete = (row: any) => {
    setSelected(row);
    deleteModalState.setTrue();
  };

  const onConfirmDelete = () => {
    toast("Order deleted", {
      important: true,
      action: {
        label: "Close",
        onClick(event) {
          event.preventDefault();
          toast.dismiss();
        },
      },
    });
    onClose();
    deleteModalState.setFalse();
  };

  const onCancelDelete = () => {
    onClose();
    deleteModalState.setFalse();
  };

  return {
    formState,
    deleteModalState,
    selected,
    onCreate,
    onEdit,
    onDelete,
    onConfirmDelete,
    onCancelDelete,
    onClose
  };
};

type OrdersListProps = {
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
};

export const useOrdersList = ({ onDelete, onEdit }: OrdersListProps) => {
  const [data, setData] = useState<Order[]>([]);
  const [query, setQuery] = useState({});
  const deboucedQuery = useDebouce(query);

  async function getData(): Promise<Order[]> {
    return paymentTableData as Order[];
  }

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const onQueryChange = (newQuery: any) => {
    setQuery((prev) => ({ ...prev, ...newQuery }));
  };

  const columns: ColumnDef<Order>[] = [
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
          <CommonDropdown
            actions={[
              { label: "Edit", onClick: () => onEdit(row) },
              { label: "Delete", onClick: () => onDelete(row) },
            ]}
          />
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

type OrdersFormProps = {
  formState: ReturnType<typeof useBoolean>;
  data: any;
  onClose: () => void;
};

export const useOrderForm = ({ formState, data, onClose }: OrdersFormProps) => {
  const form = useForm<z.infer<typeof ordersFormSchema>>({
    resolver: zodResolver(ordersFormSchema),
    defaultValues: {
      username: "",
    },
  });

  const isEditForm = Boolean(data);

  const onSubmitCreate = (values) => {
    // call the create order api
  };

  const onSubmitUpdate = (values) => {
    // call the update order api
  };

  const onSubmit = (values: z.infer<typeof ordersFormSchema>) => {
    console.log(values);
    if (isEditForm) onSubmitUpdate(values);
    else onSubmitCreate(values);
  };

  const title = isEditForm ? "Edit Order" : "Create Order";

  return {
    form,
    onSubmit,
    title,
  };
};
