import React from "react";
import CommonModal from "./CommonModal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import useBoolean from "@/hooks/useBoolean";
import { Loader2 } from "lucide-react";
import CommonButton from "../buttons/CommonButton";
import { scheme } from "@/types/ui-types";

interface Props {
  modalState: ReturnType<typeof useBoolean>;
  title: string;
  subtitle?: string;
  onClose?: () => void;
  onConfirm: () => void;
  isDeleting?: boolean;
  confirmButtonScheme?: scheme;
}

const ConfirmModal: React.FC<Props> = ({
  modalState,
  title,
  subtitle,
  onClose,
  onConfirm,
  isDeleting,
  confirmButtonScheme = "danger",
}) => {
  return (
    <CommonModal
      isOpen={modalState.value}
      title={title}
      subtitle={subtitle}
      onClose={() => {
        modalState.setFalse();
        onClose && onClose();
      }}
      footerActions={
        <div className="flex justify-end">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <CommonButton
            className="ml-2"
            scheme={confirmButtonScheme}
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </CommonButton>
        </div>
      }
    ></CommonModal>
  );
};

export default ConfirmModal;
