import React, { useState } from "react";
import OrdersList from "./OrdersList";
import useBoolean from "@/hooks/useBoolean";
import PageHeader from "@/components/globals/layouts/OperationLayout/PageHeader";
import OrdersForm from "./OrdersForm";
import ConfirmModal from "@/components/globals/modals/ConfirmModal";

interface Props {}

const Orders: React.FC<Props> = () => {
  const formState = useBoolean(false);
  const deleteModalState = useBoolean(false);
  const [selected, setSelected] = useState(null);

  const onCreate = () => {
    formState.setTrue();
  };

  const onEdit = (row: any) => {
    console.log(row, "onEdit Called");
    setSelected(row);
    formState.setTrue();
  };

  const onDelete = (row: any) => {
    console.log(row, "onDelete Called");
    setSelected(row);
    deleteModalState.setTrue();
  };

  const onConfirmDelete = () => {
    console.log("onConfirmDelete Called");
    deleteModalState.setFalse();
  };

  const onCancelDelete = () => {
    deleteModalState.setFalse();
  };

  return (
    <div>
      <PageHeader title={"Orders"} onCreate={onCreate} />
      <OrdersList onDelete={onDelete} onEdit={onEdit} />
      <OrdersForm
        formState={formState}
        data={selected}
        onClose={() => setSelected(null)}
      />
      <ConfirmModal
        modalState={deleteModalState}
        onConfirm={onConfirmDelete}
        title="Delete Order?"
        subtitle="Are you sure you want to delete this order? This action cannot be undone."
        onClose={onCancelDelete}
        isDeleting={false}
      />
    </div>
  );
};

export default Orders;
