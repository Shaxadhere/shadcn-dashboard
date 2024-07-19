import React from "react";
import CommonMultiSelect from "../forms/CommonMultiSelect";

interface Props {
  query?: any;
  onQueryChange?: ({}: any) => void;
  table: any;
  filters?: any[];
}

const TableFilters: React.FC<Props> = ({
  onQueryChange,
  query,
  table,
  filters,
}) => {
  return (
    <div className="flex gap-3">
      {filters?.map(
        (filter) =>
          table.getColumn(filter.value ? String(filter.value) : "") && (
            <CommonMultiSelect
              key={String(filter.value)}
              column={table.getColumn(filter.value ? String(filter.value) : "")}
              title={filter.label}
              options={filter.options ?? []}
            />
          )
      )}
    </div>
  );
};

export default TableFilters;
