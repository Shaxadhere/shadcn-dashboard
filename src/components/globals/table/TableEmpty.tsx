import { TableCell, TableRow } from "@/components/ui/table";

type Props = {
  columnsLength: number;
};

const TableEmpty = ({ columnsLength }: Props) => {
  return (
    <TableRow>
      <TableCell colSpan={columnsLength} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
};

export default TableEmpty;
