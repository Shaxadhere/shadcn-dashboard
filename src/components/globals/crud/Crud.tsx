import React from "react";
import CrudList from "./CrudList";
import CrudHeader from "./CrudHeader";
import useBoolean from "@/hooks/useBoolean";

interface Props {}

const Crud: React.FC<Props> = () => {
  const formState = useBoolean(false);

  const onCreate = () => {
    formState.setTrue();
  };

  const onUpdate = () => {
    formState.setTrue();
  };

  const onDelete = () => {};

  const onConfirmDelete = () => {};

  return (
    <div>
      <CrudHeader title="Orders" />
      <CrudList formState={formState} />
    </div>
  );
};

export default Crud;
