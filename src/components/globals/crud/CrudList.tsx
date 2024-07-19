import React from "react";
import { useCrudList } from "./CrudContainer";
import useBoolean from "@/hooks/useBoolean";
import DataTable from "@/components/globals/table/DataTable";

interface Props {
  formState: ReturnType<typeof useBoolean>;
}

const CrudList: React.FC<Props> = ({ formState }) => {
  const { columns, data, onQueryChange, query } = useCrudList({ formState });
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

export default CrudList;
