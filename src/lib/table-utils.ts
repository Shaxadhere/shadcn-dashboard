import { objectToQuery } from "./query-utils";

export const onColumnFilterChange = ({
  filter,
  onQueryChange,
  setColumnFilters,
  columnFilters,
}) => {
  const filterObject = {};
  // @ts-ignore //getting filter state via sort
  filter(columnFilters).forEach((item) => {
    filterObject[item.id] = item.value?.join(",");
  });
  onQueryChange &&
    onQueryChange({
      filters: objectToQuery({ params: filterObject }),
    });
  setColumnFilters(filter);
};

export const onSortingChange = ({
  sort,
  setSorting,
  onQueryChange,
  sorting,
}) => {
  // @ts-ignore //getting sorting state via sort
  const _sortValue = sort(sorting)?.at(0) || null;
  setSorting(sort);
  if (_sortValue) {
    onQueryChange &&
      onQueryChange({
        sort: _sortValue?.id,
        order: _sortValue?.desc ? "desc" : "asc",
      });
  }
};
