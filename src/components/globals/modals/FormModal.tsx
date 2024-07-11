import React from "react";
import CommonModal from "./CommonModal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";

interface Props {
  form: any;
  onSubmit: (values: any) => void;
  children?: React.ReactNode;
  onClose?: () => void;
}

const FormModal: React.FC<Props> = ({ onSubmit, form, children, onClose }) => {
  return (
    <Form {...form}>
      <form>
        <CommonModal
          triggerText="Open Modal"
          triggerComponent={() => <Button>Open Modal</Button>}
          title="Modal Title"
          subtitle="Make changes to your profile here. Click save when you're done."
          onClose={() => {
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
