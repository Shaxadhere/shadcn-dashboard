import React from "react";
import CommonModal from "./CommonModal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import useBoolean from "@/hooks/useBoolean";

interface Props {
  form: any;
  onSubmit: (values: any) => void;
  children?: React.ReactNode;
  onClose?: () => void;
  formState: ReturnType<typeof useBoolean>;
  title: string;
  subtitle?: string;
}

const FormModal: React.FC<Props> = ({
  onSubmit,
  form,
  children,
  onClose,
  formState,
  title,
  subtitle
}) => {
  return (
    <Form {...form}>
      <form>
        <CommonModal
          isOpen={formState.value}
          title={title}
          subtitle={subtitle}
          onClose={() => {
            formState.setFalse();
            onClose && onClose();
            form.reset();
          }}
          footerActions={
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button className="ml-2" onClick={form.handleSubmit(onSubmit)}>
                Save
              </Button>
            </div>
          }
        >
          {children}
        </CommonModal>
      </form>
    </Form>
  );
};

export default FormModal;
