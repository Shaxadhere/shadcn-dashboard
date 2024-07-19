import React from "react";
import OrdersList from "./OrdersList";
import PageHeader from "@/components/globals/layouts/OperationLayout/PageHeader";
import OrdersForm from "./OrdersForm";
import ConfirmModal from "@/components/globals/modals/ConfirmModal";
import { useOrdersRoot } from "./OrdersContainer";

interface Props {}

const Orders: React.FC<Props> = () => {
  const {
    formState,
    deleteModalState,
    selected,
    onCreate,
    onEdit,
    onDelete,
    onConfirmDelete,
    onCancelDelete,
    onClose,
  } = useOrdersRoot();
  return (
    <div>
      <PageHeader title={"Orders"} onCreate={onCreate} />
      <OrdersList onDelete={onDelete} onEdit={onEdit} />
      <OrdersForm formState={formState} data={selected} onClose={onClose} />
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
