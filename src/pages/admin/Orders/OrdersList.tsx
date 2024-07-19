import React from "react";
import { useOrdersList } from "./OrdersContainer";
import DataTable from "@/components/globals/table/DataTable";

interface Props {
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
}

const OrdersList: React.FC<Props> = ({ onDelete, onEdit }) => {
  const { columns, data, onQueryChange, query } = useOrdersList({
    onDelete,
    onEdit,
  });
  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        data={data}
        totalRecords={200}
        onQueryChange={onQueryChange}
        query={query}
      />
    </div>
  );
};

export default OrdersList;
